// package imports
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// config
dotenv.config();

// model import
import User from "../models/user.js";

// util imports
import {infoToUpdate} from "../utils/userControllerUtils.js";
import {
    inputValidation,
    testEmail,
    testNumeric,
    isUpperCase
} from "../utils/validationUtils.js"

// constants from env file
const secretKey = process.env.JWT_SECRET;

const register = (req, res) => {
    if (!inputValidation(req)) {
        return res.status(400).send({
            code: "400",
            message: "Fields can not be empty. Please fill in all fields."
        });
    }

    if(!isUpperCase(req.body.name) || !isUpperCase(req.body.surname)) {
        return res.status(400).send({
            code: "400",
            message: "First name and last name should start with uppercase letters. Try again. "
        });
    }

    if (!testNumeric(req.body.password)) {
        return res.status(400).send({
            code: "400",
            message: "Password must contain at least one number. Please try again. "
        });
    }

    if (!testEmail(req.body.email)) {
        return res.status(400).send({
            code: "400",
            message: "This is not a valid email address. Please try again. "
        });
    }

    User.find({email: req.body.email}).then(data => {
        if (data) {
            return res.status(409).send({
                code: "409",
                message: "A user with this email already exists. Try again or login."
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).send({
                        code: "500",
                        message: "Something went wrong during register. Try again."
                    });
                } else {
                    const newUser = new User({
                        name: req.body.name,
                        surname: req.body.surname,
                        email: req.body.email,
                        password: hash,
                    });
                    newUser.save().then(data => {
                        res.status(200).send({
                            code: "200",
                            message: "Profile created successfully",
                            data: data
                        });
                    }).catch((err) => {
                        // console.log(err);
                        res.status(500).send({
                            code: "500",
                            message: "Something went wrong during register. Try again."
                        });
                    });
                }
            });
        }
    });
};

const login = (req, res) => {
    if (!inputValidation(req)) {
        return res.status(400).send({
            code: "400",
            message: "Email and password cannot be empty. Please complete email and password fields. "
        });
    }

    if (!testEmail(req.body.email)) {
        return res.status(400).send({
            code: "400",
            message: "A user with this email does not exist. Please try again. "
        });
    }

    User.findOne({email: req.body.email}).then(data => {
        if (!data) {
            return res.status(404).send({
                code: "404",
                message: "Email or password is incorrect. Please try again. "
            });
        } else {
            bcrypt.compare(req.body.password, data.password)
                .then(result => {
                    if (result) {
                        const token = jwt.sign({
                            email: data.email,
                            userId: data._id,
                            expirationTimestamp: Date.now()
                        }, secretKey, {
                            expiresIn: "48h"
                        });
                        return res.status(200).send({
                            message: "Logged in successfully.",
                            token: token,
                            name: data.name,
                            surname: data.surname,
                            userId: data._id,
                            email: data.email,
                            expirationTimestamp: Date.now() + 1000 * 60 * 60 * 48
                        });
                    } else {
                        res.status(401).send({
                            code: "401",
                            message: "Email or password is incorrect. Please try again."
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).send({
                        code: "500",
                        message: "Something went wrong during login. Try again."
                    });
                });
        }
    });
};

const get = (req, res) => {
    User.findById(req.params.userId)
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    code: "404",
                    message: "User not found"
                });
            }
            res.status(200).send(data);
        }).catch(err => {
        console.log(err);
        res.status(500).send({
            code: "500",
            message: "An error occurred while retrieving users"
        });
    });
};

const search = (req, res) => {
    if(!req.query) {
        res.send({
            message: "There was a problem while searching for users. Try again."
        });
    } else if (!req.query.name || !req.query.surname) {
        res.send({
            message: "Please provide name and surname"
        });
    }

    User.find({name: req.query.name, surname: req.query.surname}).find({_id: {$ne: req.userId}}).then(data => {
        if(data === null || data.length === 0) {
            res.send({
                message: "No results"
            });
        } else {
            res.send(data);
        }
    }).catch(() => {
        res.send({
            message: "An error occurred while searching for a user"
        });
    })
}

const remove = (req, res) => {
    User.findByIdAndRemove(req.params.userId).then(data => {
        if (!data) {
            return res.status(404).send({
                code: "404",
                message: "User not found"
            });
        }
        res.status(200).send({
            code: "200",
            message: "User profile deleted successfully"
        });
    }).catch(err => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
            return res.status(404).send({
                code: "404",
                message: "User not found"
            });
        }
        return res.status(500).send({
            code: "500",
            message: "Could not delete this user profile"
        });
    });
};

const update = async (req, res) => {
    if (!inputValidation(req)) {
        return res.status(400).send({
            code: "400",
            message: "All information must be provided. Please fill in missing information. "
        });
    }

    User.findByIdAndUpdate(req.params.userId, await infoToUpdate(req), {new: true}).then(data => {
        if (!data) {
            return res.status(404).send({
                code: "404",
                message: "User not found with id " + req.params.userId
            });
        }
        res.status(200).send({
            code: "200",
            message: "User information updated successfully",
            data: data
        });
    }).catch(err => {
        console.log(err);
        if (err.kind === "ObjectId") {
            return res.status(404).send({
                code: "404",
                message: "User not found with id " + req.params.userId
            });
        }
        return res.status(500).send({
            code: "500",
            message: "Some error occurred while updating your contact information"
        });
    });
};

export default {register, login, get, search, remove, update};
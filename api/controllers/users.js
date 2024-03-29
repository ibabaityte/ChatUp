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
import cloudinary from "../utils/cloudinaryConfig.js";

// constants from env file
const secretKey = process.env.JWT_SECRET;

// image
let image = "../api/pics/image.png";

const register = (req, res) => {
    if (!inputValidation(req)) {
        return res.status(400).send({
            message: "Fields can not be empty. Please fill in all fields."
        });
    }

    if (!isUpperCase(req.body.name) || !isUpperCase(req.body.surname)) {
        return res.status(400).send({
            message: "First name and last name should start with uppercase letters. Try again. "
        });
    }

    if (!testNumeric(req.body.password)) {
        return res.status(400).send({
            message: "Password must contain at least one number. Please try again. "
        });
    }

    if (!testEmail(req.body.email)) {
        return res.status(400).send({
            message: "This is not a valid email address. Please try again. "
        });
    }

    User.find({email: req.body.email}).then(data => {
        if (data.length > 0) {
            return res.status(409).send({
                message: "A user with this email already exists. Try again or login."
            });
        } else {
            bcrypt.hash(req.body.password, 10, async (err, hash) => {
                if (err) {
                    return res.status(500).send({
                        message: "Something went wrong during register. Try again."
                    });
                } else {

                    // uploading image to cloudinary
                    let imageUrl;
                    let cloudinaryId;
                    await cloudinary.uploader.upload(image)
                        .then(result => {
                            imageUrl = result.secure_url;
                            cloudinaryId = result.public_id;
                        })
                        .catch(err => {
                            console.log(err);
                        });
                    // creating user object
                    const newUser = new User({
                        nameAndSurname: req.body.name + " " + req.body.surname,
                        email: req.body.email,
                        password: hash,
                        image: imageUrl,
                        cloudinaryId,
                        bio: "My bio"
                    });

                    newUser.save().then(data => {
                        return res.status(200).send({
                            message: "Profile created successfully",
                            data: data
                        });
                    }).catch((err) => {
                        console.log(err);
                        return res.status(500).send({
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
            message: "Email and password cannot be empty. Please complete email and password fields."
        });
    }

    if (!testEmail(req.body.email)) {
        return res.status(400).send({
            message: "A user with this email does not exist. Please try again."
        });
    }

    User.findOne({email: req.body.email}).then(data => {
        if (!data) {
            return res.status(404).send({
                message: "Email or password is incorrect. Please try again. "
            });
        } else {
            const nameAndSurname = data.nameAndSurname;
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
                            nameAndSurname,
                            userId: data._id,
                            email: data.email,
                            image: data.image,
                            cloudinaryId: data.cloudinaryId,
                            bio: data.bio,
                            expirationTimestamp: Date.now() + 1000 * 60 * 60 * 48
                        });
                    } else {
                        return res.status(401).send({
                            message: "Email or password is incorrect. Please try again."
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                    return res.status(500).send({
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
                    message: "User not found"
                });
            }
            return res.status(200).send(data);
        }).catch(err => {
        console.log(err);
        return res.status(500).send({
            message: "An error occurred while retrieving users"
        });
    });
};

const search = (req, res) => {
    if (!req.query) {
        return res.status(400).send({
            data: [],
            message: "There was a problem while searching for users. Try again."
        });
    } else if (!req.query.keyword) {
        return res.status(400).send({
            data: [],
            message: "Please provide a name or a surname to search for a user."
        });
    }

    User.find({
        nameAndSurname: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    }).find({_id: {$ne: req.userId}}).then(data => {
        if (data === null || data.length === 0) {
            return res.status(404).send({
                data: [],
                message: "No results"
            });
        } else {
            return res.status(200).send(data);
        }
    }).catch((err) => {
        console.log(err);
        return res.status(500).send({
            data: [],
            message: "An error occurred while searching for a user"
        });
    })
}

const remove = (req, res) => {
    User.findByIdAndRemove(req.params.userId).then(data => {
        if (!data) {
            return res.status(404).send({
                message: "User not found"
            });
        }
        return res.status(200).send({
            message: "User profile deleted successfully"
        });
    }).catch(err => {
        console.log(err);
        if (err.kind === "ObjectId" || err.name === "NotFound") {
            return res.status(404).send({
                message: "User not found"
            });
        }
        return res.status(500).send({
            message: "Could not delete this user profile"
        });
    });
};

const update = async (req, res) => {
    if (!inputValidation(req)) {
        return res.status(400).send({
            message: "All information must be provided. Please fill in missing information. "
        });
    }

    // need the option {new: true} so that the response sends back the new updated data instead of old data
    await User.findByIdAndUpdate(req.params.userId, await infoToUpdate(req), {new: true}).then(data => {
        if (!data) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        return res.status(200).send({
            message: "User information updated successfully",
            data: data
        });
    }).catch(err => {
        console.log(err);
        if (err.kind === "ObjectId") {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        return res.status(500).send({
            message: "Some error occurred while updating your contact information"
        });
    });
};

export default {register, login, get, search, remove, update};

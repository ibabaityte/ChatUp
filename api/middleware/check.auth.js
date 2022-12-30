// package import
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// constants from env file
const secretKey = process.env.JWT_SECRET;

// checking if a user is authorised to be able to make a request
export default async (req, res, next) => {
    try {
        req.userId = jwt.verify(req.headers.authorization, secretKey).userId;
        next();
    } catch {
        return res.status(401).send({
            message: "Authentication failed"
        });

    }
};

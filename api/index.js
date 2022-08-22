import express from "express";
import mongoose from "mongoose";
import UserRoutes from "./routes/users.js"
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const api = express();
const port = process.env.PORT;
const dbUrl = process.env.DB_URL;

dotenv.config();

api.use(bodyParser.urlencoded({extended: true}));
api.use(bodyParser.json());
api.use(cors());
api.use(express.json());

api.use(UserRoutes);

mongoose.connect(`mongodb://127.0.0.1:27017/${dbUrl}`, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully connected to database");
    }
});

api.listen(port, () => {
    console.log("Server listening on port " + port);
});
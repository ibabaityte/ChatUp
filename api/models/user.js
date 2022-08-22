import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
},{
    timestamps: true
});

const Users = mongoose.model("User", userSchema);

export default Users;
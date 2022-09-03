import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nameAndSurname: String,
    email: String,
    password: String,
},{
    timestamps: true
});

const Users = mongoose.model("User", userSchema);

export default Users;
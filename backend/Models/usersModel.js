import mongoose, { Schema } from "mongoose";

const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    address: String,
    identity: String,
    dob: Date,
    isDeleted: Boolean,
    role: String
})

const usersModel = mongoose.model("users", usersSchema)

export default usersModel
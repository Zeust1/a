import mongoose, { Schema } from "mongoose";

const teacherpositionsSchema = new mongoose.Schema({
    name: String,
    code: String,
    des: String,
    isActive: Boolean,
    isDeleted: Boolean
})

const teacherpositionsModel = mongoose.model('positions', teacherpositionsSchema)

export default teacherpositionsModel
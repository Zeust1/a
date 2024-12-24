import mongoose, { Schema } from "mongoose";

const teachersSchema = new mongoose.Schema({
    userId: [{ type: Schema.Types.ObjectId, ref: 'users' }],
    isActive: Boolean,
    isDeleted: Boolean,
    code: String,
    startDate: Date,
    teacherPositionsId: [{ type: Schema.Types.ObjectId, ref: 'positions' }],
    degrees: { type: Schema.Types.Mixed }
})

const teachersModel = mongoose.model('teachers', teachersSchema)

export default teachersModel
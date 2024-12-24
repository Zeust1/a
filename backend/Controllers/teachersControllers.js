import mongoose from "mongoose";
import teachersModel from "../Models/teachersModel.js";
import usersModel from "../Models/usersModel.js";

const teachersControllers = {
    getTeachers: async (req, res, next) => {
            const  {page, limit}  = req.query
            try {
                const listTeachers = await teachersModel.find().populate('teacherPositionsId', 'name des isActive')
                .populate('userId', 'address name email phoneNumber').skip((page - 1) * parseInt(limit)).limit(parseInt(limit))
                res.status(200).send({
                    succes: 'succesfully',
                    data: listTeachers
                })
            } catch (error) {
                res.status(404)
            }

    },

    postTeachers: async (req, res, next) => {
        const {name, code, email, phonenumber, birhday, address, type, school, major, status, isGraduated} = req.body
        try {
            const newUser = await usersModel.create({
                name,
                email,
                phoneNumber: phonenumber,
                dob: birhday,
                address
            })
            const newTeacher = await teachersModel.create({
                userId: newUser._id,
                code,
                degrees: {
                    type,
                    school,
                    major,
                    year: isGraduated,
                    isGraduated: status
                }
            })
            res.status(200)
        } catch (error) {
            res.status(404)
        }

    }
}

export default teachersControllers
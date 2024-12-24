import { Router } from "express";
import teachersControllers from "../Controllers/teachersControllers.js";

const teachersRoutes = Router()

teachersRoutes.route('/teachers').get(teachersControllers.getTeachers).post(teachersControllers.postTeachers)

export default teachersRoutes

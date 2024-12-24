import express from 'express'
import mongoose from 'mongoose'
import teachersRoutes from './Routes/teachersRoutes.js'
import teachersModel from './Models/teachersModel.js'
import teacherpositionsModel from './Models/teacherpositionsModel.js'
import usersModel from './Models/usersModel.js'
import cors from 'cors'


mongoose.connect('mongodb+srv://finaltest:finaltest@cluster0.sgnrc.mongodb.net/finaltest')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/v1', teachersRoutes)

app.listen(8080, () => console.log('server is running'))
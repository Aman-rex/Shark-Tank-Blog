import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserRouter from './routes/user.route.js'

const app = express()
dotenv.config()


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Connected to MongoDB')
}).catch((err)=>{
    console.log(err)
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})

app.use('/api/user',UserRouter)
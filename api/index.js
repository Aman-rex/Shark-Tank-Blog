import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from  './routes/auth.route.js'
import postRouter from './routes/post.rote.js'
import adminRouter from './routes/admin.router.js'
import cookieParser from 'cookie-parser'
const app = express()

app.use(express.json())

dotenv.config()


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Connected to MongoDB')
}).catch((err)=>{
    console.log(err)
})
app.use(cookieParser())
app.listen(4000,()=>{
    console.log('Server is running on port 4000')
})

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
app.use('/api/post',postRouter)
app.use('/api/admin',adminRouter)
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})

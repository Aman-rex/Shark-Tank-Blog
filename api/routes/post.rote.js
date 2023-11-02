import express from 'express'
import { createPost,deletePost } from '../controllers/post.controller.js'
import { verifyToken } from '../utils/verifyUser.js'
import { like } from '../controllers/likes.controller.js'
const router=express.Router()

router.post('/create',verifyToken,createPost)
router.post('/likes/:id',verifyToken,like)
router.post('/delete/:id',verifyToken,deletePost)
export default router
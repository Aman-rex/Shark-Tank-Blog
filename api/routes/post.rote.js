import express from 'express'
import { createPost,deletePost } from '../controllers/post.controller.js'
import { verifyToken } from '../utils/verifyUser.js'
import { like } from '../controllers/likes.controller.js'
import {createComment,deleteComment} from '../controllers/comment.controller.js'
const router=express.Router()

router.post('/create',verifyToken,createPost)
router.post('/likes/:id',verifyToken,like)
router.post('/comment/:id',verifyToken,createComment)
router.delete('/comment/delete/:id',verifyToken,deleteComment)
router.post('/delete/:id',verifyToken,deletePost)
export default router
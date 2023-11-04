import express from 'express'
import { getblogs} from '../controllers/user.controller.js'

const router=express.Router()

router.get('/getblogs',getblogs)

export default router
import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken"

export const signup = async (req, res,next) => {

  const { name, email, password, role } = req.body;
  try{
    const user=await User.findOne({email})
    if(user) return next(errorHandler(404,'User Already Exist'))
    const hashedPassword =bcryptjs.hashSync(password,10)
    const newUser = new User({ name, email, password:hashedPassword, role });
    await newUser.save();
    res.status(201).json("User Created Successfully");
  }catch(error){
    next(error)
  }
};

export const signin = async(req,res,next)=>{
  const {email,password}=req.body
  try{
    const validUser = await User.findOne({email})
    if(!validUser) return next(errorHandler(404,'Enter valid Email'))
    const validPassword = bcryptjs.compareSync(password,validUser.password)
    if(!validPassword) return next(errorHandler(404,'Invalid Password'))
    const token=jwt.sign({id:validUser._id},process.env.Secret_Key)
    const {password:pass,...rest}=validUser._doc
    res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest)
  }catch(error){
    next(error)
  }
}
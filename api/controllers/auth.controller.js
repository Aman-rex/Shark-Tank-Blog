import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";


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

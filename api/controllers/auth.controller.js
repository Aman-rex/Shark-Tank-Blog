import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
export const signup = async (req, res,next) => {
  const { name, email, password, role } = req.body;
  const hashedPassword =bcryptjs.hashSync(password,10)
  const newUser = new User({ name, email, password:hashedPassword, role });
  try{
    await newUser.save();
    res.status(201).json("User Created Successfully");
  }catch(error){
    next(error)
  }

};

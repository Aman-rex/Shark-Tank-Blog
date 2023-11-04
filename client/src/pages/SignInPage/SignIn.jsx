
import './signin.css'
import { toast } from 'react-toastify';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../redux/user/userSlice';
import { signInStart,signInFailure,signInSuccess } from '../../redux/user/userSlice';
export default function SignIn() {
  const naviagte=useNavigate()
  const dispatch = useDispatch()
  const [formdata,setFormData] = useState({})
  const {loading,error}=useSelector(userSelector)
  const handleChange=(e)=>{
    setFormData({
      ...formdata,
      [e.target.id]:e.target.value
    })
  }


  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin',{
        method:'POST',
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify(formdata)
      })
      const data= await res.json()
      if(data.success==false){
        toast(data.message, {
          position: 'top-right',
          autoClose: 3000, 
          type: 'error', 
        });
        dispatch(signInFailure(data.message))
        return
      }
      toast('Login Successful', {
        position: 'top-right',
        autoClose: 3000, 
        type: 'Suceesfull', 
      });
      dispatch(signInSuccess(data))
      console.log(data)
      if(data.role=='Admin'){
        naviagte('/admin')
        return
      }
      naviagte('/')

    }catch(error){
      console.log(error)
    }
   
  }
  return (
    <div className='signin_container'>
      <h1>Sign-in Page</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='username' required id='email' onChange={handleChange}/>
          <input type="password" placeholder='password' required id='password' onChange={handleChange} />
          <button>
            {loading?"login...":"login"}
          </button>
        </form>
        <NavLink to={'/sign-up'}><p>dont have an account</p></NavLink>
      </div>
  )
}

import React from 'react'
import './SignUp.css'
import { Link, NavLink, useNavigate } from "react-router-dom";
export default function SignUp() {
  return (
    <div className='signup_container'>
      <h1>Sign up</h1>
      <form>
        <input type="text" placeholder='Username' id='username'/>
        <input type="Email" placeholder='Email' id='email'/>
        <input type="password" placeholder='password'  id='password'/>
        <button>Create Account</button>  
      </form>
      <NavLink to={'/sign-in'}>Already have an account?</NavLink>
    </div>
  )
}

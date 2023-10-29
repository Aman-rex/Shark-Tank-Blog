import React from 'react'
import './signin.css'
import { Link, NavLink, useNavigate } from "react-router-dom";
export default function SignIn() {
  return (
    <div className='signin_container'>
      <h1>Sign-in Page</h1>
        <form>
          <input type="text" placeholder='username' id='username'/>
          <input type="password" placeholder='password' id='password' />
          <button>
            login
          </button>
        </form>
        <NavLink to={'/sign-up'}><p>dont have an account</p></NavLink>
      </div>
  )
}

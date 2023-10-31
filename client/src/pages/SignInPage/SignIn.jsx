import Noty from 'noty';
import 'noty/lib/noty.css';
import './signin.css'

import { Link, NavLink, useNavigate } from "react-router-dom";
export default function SignIn() {
  const handleSubmit=(e)=>{
    e.preventDefault()
    new Noty({
      text: 'Hello',
    }).show()
  }
  return (
    <div className='signin_container'>
      <h1>Sign-in Page</h1>
        <form onSubmit={handleSubmit}>
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

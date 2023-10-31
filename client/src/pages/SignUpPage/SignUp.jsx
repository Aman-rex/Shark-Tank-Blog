import React, { useState } from "react";
import "./SignUp.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, NavLink, useNavigate } from "react-router-dom";
export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [loading,setLoading]=useState(false)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success == false) {
        setLoading(false)
        toast(data.message, {
          position: 'top-right',
          autoClose: 3000, 
          type: 'error', 
        });
        return;
      }
      toast('Sign Up Successful', {
        position: 'top-right',
        autoClose: 3000,
        type: 'success',
      });
      setLoading(false)
      navigate('/sign-in')
    } catch (error) {
      console.log(error.message)
    }
  };





  return (
    <div className="signup_container">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          id="name"
          onChange={handleChange}
          required
        />
        <input
          type="Email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          required
        />
        <button>{loading?'Creating':'Create Account'}</button>
      </form>
      <NavLink to={"/sign-in"}>Already have an account?</NavLink>

    </div>
  );
}

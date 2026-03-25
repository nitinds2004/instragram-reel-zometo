import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 


const UserLogin = () => {
  const navigate = useNavigate();
  const handleSubmit = async(e) =>{
    e.preventDefault();
    const email =e.target.email.value;
    console.log(email);
    const password =e.target.password.value;

    const response = await axios.post('http://localhost:3000/api/auth/user/login',{
      email,
      password
    },{
      withCredentials:true
    })
    console.log(response.data);
     navigate("/");

  }
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Welcome back</h1>
        <p className="auth-sub">Sign in to your account.</p>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <label>
            Email
            <input id='email' type="email" name="email" placeholder="jane@example.com" />
          </label>

          <label>
            Password
            <input id='password' type="password" name="password" placeholder="••••••••" />
          </label>

          <button type="submit" className="auth-btn">Sign in</button>
        </form>

        <div className="auth-switch">
          Don't have an account? <Link to="/user/register">Create one</Link>
        </div>

        <div className="auth-role-switch">
          <Link to="/user/register">Register as normal user</Link>
          <span className="dot">·</span>
          <Link to="/food-partner/register">Register as food partner</Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;

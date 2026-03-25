import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const UserRegister = () => {

    const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const fullname =e.target.fullname.value;
    console.log(fullname);
    const email =e.target.email.value;
    const password =e.target.password.value;

   const response = await  axios.post('http://localhost:3000/api/auth/user/register',{
      fullName:fullname,
      email:email,
      password:password
     },{
      withCredentials:true
      // to seve token in cookie and send it with every request
     })

     console.log(response.data);

      navigate("/")

  };
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Create an account</h1>
        <p className="auth-sub">Sign up to start ordering.</p>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <label>
            Full name
            <input  id='fullname' type="text" name="name" placeholder="Jane Doe" />
          </label>

          <label>
            Email
            <input id='email' type="email" name="email" placeholder="jane@example.com" />
          </label>

          <label>
            Password
            <input id='password' type="password" name="password" placeholder="••••••••" />
          </label>

          <button type="submit" className="auth-btn">Create account</button>
        </form>

        <div className="auth-switch">
          Already have an account? <Link to="/user/login">Sign in</Link>
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

export default UserRegister;

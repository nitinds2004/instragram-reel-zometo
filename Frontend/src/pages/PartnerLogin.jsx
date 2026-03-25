import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PartnerLogin = () => {
   const navigate = useNavigate();

    const handleSubmit = async(e) =>{
      e.preventDefault();

    }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Partner sign in</h1>
        <p className="auth-sub">Access your partner dashboard.</p>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <label>
            Email
            <input type="email" id='email' name="email" placeholder="partner@business.com" />
          </label>

          <label>
            Password
            <input type="password" id='pas' name="password" placeholder="••••••••" />
          </label>

          <button type="button" className="auth-btn">Sign in</button>
        </form>

        <div className="auth-switch">
          Don't have a partner account? <Link to="/food-partner/register">Create one</Link>
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

export default PartnerLogin;

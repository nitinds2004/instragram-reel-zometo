import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';

const PartnerRegister = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Partner sign up</h1>
        <p className="auth-sub">Create an account for your restaurant or business.</p>

        <form className="auth-form">
          <label>
            Business name
            <input type="text" name="business" placeholder="Acme Eats" />
          </label>

          <label>
            Contact email
            <input type="email" name="email" placeholder="contact@acmeeats.com" />
          </label>

          <label>
            Contact number
            <input type="tel" name="phone" placeholder="+1 555 555 5555" />
          </label>

          <label>
            Address
            <textarea name="address" placeholder="123 Food St, City, Country" rows="3" />
          </label>

          <label>
            Password
            <input type="password" name="password" placeholder="••••••••" />
          </label>

          <button type="button" className="auth-btn">Create account</button>
        </form>

        <div className="auth-switch">
          Already a partner? <Link to="/food-partner/login">Sign in</Link>
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

export default PartnerRegister;

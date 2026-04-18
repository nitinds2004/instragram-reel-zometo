import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PartnerRegister = () => {
  const navigate = useNavigate();
    const handleSubmit = async(e) => {
      e.preventDefault();
      // Handle form submission logic here
      // You can access form values using e.target.elements
      const businessName = e.target.business.value;
      const email = e.target.email.value;
      const phone = e.target.phone.value;
      const address = e.target.address.value;
      const password = e.target.password.value;
  
      console.log({ businessName, email, phone, address, password });
      const response = await  axios.post('http://localhost:3000/api/auth/food-partner/register',{
        name:businessName,
        contectnumber:phone,
        address:address,
        email:email,
        password:password
       },{
        withCredentials:true
        // to seve token in cookie and send it with every request
       })
  
       console.log(response.data);
  
        navigate("/create-food")
  
    };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Partner sign up</h1>
        <p className="auth-sub">Create an account for your restaurant or business.</p>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
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

          <button type="submit" className="auth-btn">Create account</button>
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

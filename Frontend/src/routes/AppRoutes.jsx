import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserRegister from '../pages/UserRegister';
import UserLogin from '../pages/UserLogin';
import PartnerRegister from '../pages/PartnerRegister';
import PartnerLogin from '../pages/PartnerLogin';
import Home from '../pages/genrel/Home';
import Createfoodpartner from '../pages/food-partner/Createfoodpartner';
import PartnerProfile from '../pages/food-partner/PartnerProfile';

const AppRoutes = () => {
  return (
  <Router>
    <Routes>
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/food-partner/register" element={<PartnerRegister />} />
        <Route path="/food-partner/login" element={<PartnerLogin />} />
        <Route path="/" element={<Home />} /> 
        <Route path="/create-food" element={<Createfoodpartner />} />
        <Route path="/food-partner/profile" element={<PartnerProfile />} />
    </Routes>
  </Router>
  );
}

export default AppRoutes;

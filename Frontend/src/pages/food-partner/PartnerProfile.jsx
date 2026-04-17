import React, { useEffect, useState } from 'react';
import '../../styles/partner.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PartnerProfile = () => {
  // sample data — replace with props or fetched data
  const partner = {
    name: 'test-food-partner',
    avatar: 'https://i.pravatar.cc/120?img=47',
    address: '001 test street, test city , test',
    totalMeals: 124,
    customersServed: 987,
    gallery: [
      'https://images.unsplash.com/photo-1604908177533-9c87b36ad2f8?w=800&q=60&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=60&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571066812008-1f7a3a8f8d16?w=800&q=60&auto=format&fit=crop'
    ]
  };

  const {id}=useParams();
  const [profile, setprofile]=useState(null);
  const [video, setvideo]=useState([]);


  useEffect(() => {
    const fetchPartnerData = async () => {
      try{
        const respones=await axios.get(`http://localhost:3000/api/food-partner/${id}`,{withCredentials: true});
        console.log('Fetched partner data:', respones.data);  
        setprofile(respones.data.foodPartner);
        setvideo(respones.data.foodPartner.foodItems);
      }
      catch(error){
        console.error('Error fetching partner data:', error);
      }
    }

    fetchPartnerData();

  },[id]);

  return (
    <div className="partner-page">
      <div className="partner-card">
        <div className="partner-header">
          <img className="partner-avatar" src={partner.avatar} alt={`${partner.name} avatar`} />
          <div className="partner-info">
            <div className="partner-name-pill">{profile?.name}</div>
            <div className="partner-address" title={profile?.address}>{profile?.address}</div>
          </div>
        </div>

        <hr className="divider" />

        <div className="partner-stats">
          <div className="stat">
            <div className="stat-value">{video.length}</div>
            <div className="stat-label">total meals</div>
          </div>
          <div className="stat">
            <div className="stat-value">{partner.customersServed}</div>
            <div className="stat-label">customer served</div>
          </div>
        </div>

        <div className="gallery">
          {video.map((src, idx) => (
            <div className="gallery-item" key={idx}>
              {/* <img src={src} alt={`food-${idx}`} /> */}
              <video src={src.video} muted></video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerProfile;

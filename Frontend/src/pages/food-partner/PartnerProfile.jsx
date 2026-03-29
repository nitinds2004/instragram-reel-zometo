import React from 'react';
import '../../styles/partner.css';

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

  return (
    <div className="partner-page">
      <div className="partner-card">
        <div className="partner-header">
          <img className="partner-avatar" src={partner.avatar} alt={`${partner.name} avatar`} />
          <div className="partner-info">
            <div className="partner-name-pill">{partner.name}</div>
            <div className="partner-address" title={partner.address}>{partner.address}</div>
          </div>
        </div>

        <hr className="divider" />

        <div className="partner-stats">
          <div className="stat">
            <div className="stat-value">{partner.totalMeals}</div>
            <div className="stat-label">total meals</div>
          </div>
          <div className="stat">
            <div className="stat-value">{partner.customersServed}</div>
            <div className="stat-label">customer served</div>
          </div>
        </div>

        <div className="gallery">
          {partner.gallery.map((src, idx) => (
            <div className="gallery-item" key={idx}>
              <img src={src} alt={`food-${idx}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerProfile;

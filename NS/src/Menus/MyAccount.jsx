import React, { useState } from 'react';
import './MyAccount.css';
import {
  FaUserCircle,
  FaBoxOpen,
  FaHeart,
  FaCogs,
  FaSignOutAlt
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const MyAccount = () => {
  const [activeTab, setActiveTab] = useState('orders');
const navigate = useNavigate();
 const handleLogout = () => {
    
    navigate('/');
  };
  const renderTab = () => {
    switch (activeTab) {
      case 'orders':
        return <p>You have 2 active orders in progress.</p>;
      case 'wishlist':
        return <p>You’ve saved 5 items to your wishlist.</p>;
      case 'settings':
        return (
          <div className="settings-form">
            <label>Email <input type="email" value="user@example.com" /></label>
            <label>Phone <input type="text" value="+91-9876543210" /></label>
            <button>Update</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="account-page">
      <div className="account-card">
        <div className="account-header">
          <FaUserCircle className="profile-icon" />
          <h2>Welcome, User</h2>
          <p>Manage your profile, orders, and preferences</p>
        </div>

        <div className="tabs">
          <button
            onClick={() => setActiveTab('orders')}
            className={activeTab === 'orders' ? 'active' : ''}
          >
            <FaBoxOpen /> Orders
          </button>
          <button
            onClick={() => setActiveTab('wishlist')}
            className={activeTab === 'wishlist' ? 'active' : ''}
          >
            <FaHeart /> Wishlist
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={activeTab === 'settings' ? 'active' : ''}
          >
            <FaCogs /> Settings
          </button>
          <button className="logout" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>

        <div className="tab-content">{renderTab()}</div>
      </div>
    </div>
  );
};

export default MyAccount;

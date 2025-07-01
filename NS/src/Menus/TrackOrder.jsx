import React from 'react';
import './TrackOrder.css';
import { FaBox, FaTruck, FaCheckCircle, FaShippingFast } from 'react-icons/fa';

const TrackOrder = () => {
  const trackingSteps = [
    { label: 'Order Placed', icon: <FaBox />, status: 'done' },
    { label: 'Shipped', icon: <FaShippingFast />, status: 'done' },
    { label: 'Out for Delivery', icon: <FaTruck />, status: 'current' },
    { label: 'Delivered', icon: <FaCheckCircle />, status: 'pending' },
  ];

  const completedCount = trackingSteps.filter(s => s.status === 'done' || s.status === 'current').length;
  const progressPercent = (completedCount / trackingSteps.length) * 100;

  return (
    <div className="track-container">
      <h2>📦 Track Your Order</h2>

      {/* Progress Bar */}
      <div className="progress-bar-wrapper">
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>

      <div className="steps-wrapper">
        {trackingSteps.map((step, idx) => (
          <div key={idx} className={`step ${step.status}`}>
            <div className="step-icon">{step.icon}</div>
            <p>{step.label}</p>
          </div>
        ))}
      </div>

      <div className="tracking-info">
        <p><strong>Order ID:</strong> #ORD123456</p>
        <p><strong>Expected Delivery:</strong> June 24, 2025</p>
        <p><strong>Shipping Address:</strong> 123, Park Lane, Mumbai, India</p>
      </div>
    </div>
  );
};

export default TrackOrder;

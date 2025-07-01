import React from 'react';
import './ShippingInfo.css';

const ShippingInfo = () => {
  return (
    <div className="shipping-page">
      <div className="shipping-card">
        <h2>Shipping Information</h2>
        <form className="shipping-form">
          <label>
            Full Name
            <input type="text" placeholder="John Doe" />
          </label>

          <div className="row two-column">
            <label>
              Email
              <input type="email" placeholder="john@example.com" />
            </label>
            <label>
              Phone
              <input type="tel" placeholder="+1234567890" />
            </label>
          </div>

          <label>
            Address Line 1
            <input type="text" placeholder="123 Main St" />
          </label>

          <label>
            Address Line 2
            <input type="text" placeholder="Apartment, suite, etc." />
          </label>

          <div className="row three-column">
            <label>
              City
              <select>
                <option>Van Nuys</option>
                <option>Los Angeles</option>
                <option>New York</option>
              </select>
            </label>
            <label>
              State
              <select>
                <option>California</option>
                <option>Texas</option>
                <option>Florida</option> 
              </select>
            </label>
            <label>
              Zip Code
              <input type="text" placeholder="90210" />
            </label>
          </div>

          <label>
            Country
            <select>
              <option>USA</option>
              <option>Canada</option>
              <option>India</option>
            </select>
          </label>

          <div className="form-buttons">
            <button className="save-btn" type="submit">Save</button>
            <button className="exit-btn" type="button">Exit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShippingInfo;

import React from 'react';
import { cart } from './ProductDetails';
import { useNavigate } from 'react-router-dom';
import './AddToCart.css';
import { FaArrowLeft, FaTrashAlt, FaCheckCircle } from 'react-icons/fa';

const AddToCart = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert('✅ Proceeding to checkout...');
  };

  const handleRemove = (id) => {
    const index = cart.findIndex(p => p.id === id);
    if (index !== -1) {
      cart.splice(index, 1);
      navigate(0); 
    }
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>🛒 Your Cart is Empty</h2>
        <button onClick={() => navigate(-1)} className="back-button">
          <FaArrowLeft /> Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛍️ Shopping Cart</h2>

      <div className="cart-list">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-img" />
            <div className="cart-info">
              <h4>{item.title}</h4>
              <p className="cart-brand">{item.brand}</p>
              <p className="cart-price"><strong>{item.price}</strong></p>
            </div>
            <button className="remove-btn" onClick={() => handleRemove(item.id)} title="Remove">
              <FaTrashAlt />
            </button>
          </div>
        ))}
      </div>

      <button className="checkout-btn" onClick={handleCheckout}>
        <FaCheckCircle style={{ marginRight: '8px' }} />
        Proceed to Checkout
      </button>
    </div>
  );
};

export default AddToCart;

import React, { useState } from 'react';
import { wishlist } from './ProductDetails';
import { useNavigate } from 'react-router-dom';
import './Wishlist.css';

const Wishlist = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([...wishlist]);

  const handleRemove = (id) => {
    const updated = items.filter(product => product.id !== id);
    setItems(updated);
    const index = wishlist.findIndex(p => p.id === id);
    if (index !== -1) wishlist.splice(index, 1);
  };

  if (items.length === 0) {
    return (
      <div className="wishlist-empty">
            <button onClick={() => navigate(-1)} className="back-button">← Back</button>
      </div>
    );
  }

  return (
    <div className="wishlist-container">
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>
      <h2 className="wishlist-title">♡ My Wishlist</h2>
      <div className="wishlist-grid">
        {items.map((product) => (
          <div key={product.id} className="wishlist-card">
            <img src={product.image} alt={product.title} className="wishlist-image" />
            <h4 className="wishlist-product-title">{product.title}</h4>
            <p className="wishlist-price">Price: <strong>{product.price}</strong></p>
            <div className="wishlist-buttons">
              <button
                className="view-button"
                onClick={() => navigate('/productdetails/:id', { state: { product } })}
              >
                View Details
              </button>
              <button
                className="remove-button"
                onClick={() => handleRemove(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaHeart, FaHeartBroken, FaShoppingCart, FaBolt } from 'react-icons/fa';
import './ProductDetails.css';
import OrderSummaryModal from './OrderSummaryModal';

export const wishlist = [];
export const cart = []; // ✅ Shared cart array

const ProductDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;
  const [added, setAdded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAddToWishlist = () => {
    if (product && !wishlist.some(p => p.id === product.id)) {
      wishlist.push(product);
      setAdded(true);
    }
  };

  const handleAddToCart = () => {
    if (product && !cart.some(p => p.id === product.id)) {
      cart.push(product);
    }
    navigate('/addtocart'); // ✅ Navigate to cart page
  };

  if (!product) {
    return <div className="no-product">No product found</div>;
  }

  return (
    <div className="product-details-container">
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>

      <div className="details-card">
        <img src={product.image} alt={product.title} className="details-image" />

        <div className="details-info">
          <h2>{product.brand}</h2>
          <p className="subtitle">{product.title}</p>
          <p className="price"><strong>Price:</strong> {product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Rating:</strong> {product.rating} ★</p>
          <p><strong>Reviews:</strong> {product.reviews}</p>

          <div className="action-group">
            <div
              className={`wishlist-icon ${added ? 'disabled' : ''}`}
              title={added ? 'Wishlisted' : 'Add to Wishlist'}
              onClick={!added ? handleAddToWishlist : undefined}
            >
              {added ? <FaHeartBroken size={24} color="red" /> : <FaHeart size={24} color="red" />}
            </div>

            <button className="action-btn cart" onClick={handleAddToCart}>
              <FaShoppingCart style={{ marginRight: '8px' }} />
              Add to Cart
            </button>

            <button className="action-btn buy" onClick={() => setShowModal(true)}>
              <FaBolt style={{ marginRight: '8px' }} />
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <OrderSummaryModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default ProductDetails;

import React from 'react';
import './OrderSummaryModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faCheckCircle,
  faGift,
  faHandHoldingHeart,
  faRupeeSign,
  faTags,
  faShippingFast,
  faMoneyBillWave
} from '@fortawesome/free-solid-svg-icons';

const OrderSummaryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay fade-in">
      <div className="modal-content slide-up">
        <button className="close-modal-btn" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <h4 className="modal-heading">
          <FontAwesomeIcon icon={faMoneyBillWave} /> PRICE DETAILS (1 Item)
        </h4>

        <div className="price-breakdown">
          <p>
            <span><FontAwesomeIcon icon={faRupeeSign} /> Total MRP:</span>
            <span className="mrp">₹8,890</span>
          </p>
          <p>
            <span><FontAwesomeIcon icon={faTags} /> Discount:</span>
            <span className="discount">-₹3,112</span>
          </p>
          <p>
            <span><FontAwesomeIcon icon={faGift} /> Platform Fee:</span>
            <span>₹20</span>
          </p>
          <p>
            <span><FontAwesomeIcon icon={faShippingFast} /> Shipping:</span>
            <span className="free-badge">FREE</span>
          </p>
        </div>

        <h3 className="total-amount">Total Amount: ₹5,798</h3>

        <button className="place-order-btn">
          <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '8px' }} />
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default OrderSummaryModal;

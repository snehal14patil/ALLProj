import React from 'react';
import './ProductList.css';
import {
  FaTshirt,
  FaClock,
  FaShoppingBag,
  FaSpa,
  FaFemale,
  FaHatCowboy,
  FaRing,
  FaGem,
  FaMobileAlt
} from 'react-icons/fa';

const ProductList = () => {
  const productCategories = [
    {
      name: 'Clothes',
      icon: <FaTshirt />,
      subcategories: [
        { name: 'Casual', icon: <FaFemale /> },
        { name: 'Western', icon: <FaHatCowboy /> },
        { name: 'Ethnic', icon: <FaGem /> },
        { name: 'Kurtis', icon: <FaFemale /> },
        { name: 'Jeans', icon: <FaTshirt /> }
      ]
    },
    {
      name: 'Accessories',
      icon: <FaShoppingBag />,
      subcategories: [
        { name: 'Bags', icon: <FaShoppingBag /> },
        { name: 'Belts', icon: <FaRing /> },
        { name: 'Jewelry', icon: <FaGem /> },
        { name: 'Hats', icon: <FaHatCowboy /> }
      ]
    },
    {
      name: 'Watches',
      icon: <FaClock />,
      subcategories: [
        { name: 'Digital', icon: <FaMobileAlt /> },
        { name: 'Analog', icon: <FaClock /> },
        { name: 'Smart Watches', icon: <FaMobileAlt /> }
      ]
    },
    {
      name: 'Skincare',
      icon: <FaSpa />,
      subcategories: [
        { name: 'Moisturizers', icon: <FaSpa /> },
        { name: 'Face Wash', icon: <FaSpa /> },
        { name: 'Sunscreens', icon: <FaSpa /> },
        { name: 'Serums', icon: <FaSpa /> }
      ]
    }
  ];

  return (
    <div className="productlist-container">
      <h2>🛍️ Explore Product Categories</h2>
      <div className="category-grid">
        {productCategories.map((cat, idx) => (
          <div className="category-card" key={idx} style={{ animationDelay: `${idx * 0.15}s` }}>
            <div className={`category-icon-wrapper icon-${idx}`}>{cat.icon}</div>
            <h3>{cat.name}</h3>
            <ul>
              {cat.subcategories.map((sub, i) => (
                <li key={i}>
                  <span className="sub-icon">{sub.icon}</span> {sub.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

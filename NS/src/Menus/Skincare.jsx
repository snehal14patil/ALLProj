import React from 'react';
import './Skincare.css';
import { useNavigate } from 'react-router-dom';
import Sk1 from"../images/Sk1.jpg";
import Sk2 from"../images/Sk2.jpg";
import Sk3 from"../images/Sk3.jpg";
import Sk4 from"../images/Sk4.jpg";
import Sk5 from"../images/Sk5.jpg";
import Sk6 from"../images/Sk6.jpg";
import Sk7 from"../images/Sk7.jpg";
import Sk8 from"../images/Sk8.jpg";
import Sk9 from"../images/Sk9.jpg";
import Sk10 from"../images/Sk10.jpg";
const Skincare = () => {
   const navigate = useNavigate();
  const products = [
    {
      id: 1,
      brand: 'Dove',
      title: 'Lotion, Soap and Scrub',
      rating: 3.8,
      reviews: 533,
      image: Sk1,
      price: '$18.00',
      description: 'Gentle care combo with hydrating lotion, creamy soap, and exfoliating scrub.',
    },
    {
      id: 2,
      brand: 'Ordinary',
      title: 'Skin Essentials',
      rating: 4.3,
      reviews: 6400,
      image: Sk2,
      price: '$25.50',
      description: 'Essential skincare bundle for cleansing, moisturizing, and toning every day.',
    },
    {
      id: 3,
      brand: 'Daniel',
      title: 'Skin Gua Sha',
      rating: 4.3,
      reviews: 6400,
      image: Sk3,
      price: '$22.75',
      description: 'Rejuvenating facial massage tool that helps improve circulation and glow.',
    },
    {
      id: 4,
      brand: 'Nivea',
      title: 'Skin Care Lotion',
      rating: 4.3,
      reviews: 6400,
      image: Sk4,
      price: '$15.00',
      description: 'Lightweight lotion with deep moisturization for all skin types.',
    },
    {
      id: 5,
      brand: 'Cera Ve',
      title: 'Face Wash',
      rating: 4.3,
      reviews: 6400,
      image: Sk5,
      price: '$14.80',
      description: 'Dermatologist-recommended cleanser to remove dirt and excess oil gently.',
    },
    {
      id: 6,
      brand: 'Estée Lauder',
      title: 'Skin Serum',
      rating: 4.3,
      reviews: 6400,
      image: Sk6,
      price: '$45.00',
      description: 'High-performance anti-aging serum for smoother, more radiant skin.',
    },
    {
      id: 7,
      brand: 'Dr. Barbara Sturm',
      title: 'Face Serum',
      rating: 4.3,
      reviews: 6400,
      image: Sk7,
      price: '$90.00',
      description: 'Luxury serum designed to hydrate, firm, and protect the skin.',
    },
    {
      id: 8,
      brand: 'Augustinus Bader',
      title: 'Foam Skin Care',
      rating: 4.3,
      reviews: 6400,
      image: Sk8,
      price: '$58.00',
      description:'Gentle foaming formula that cleanses and nourishes skin effectively.',
    },
    {
      id: 9,
      brand: 'Drunk Elephant',
      title: 'Face Cream',
      rating: 4.3,
      reviews: 6400,
      image: Sk9,
      price: '$60.00',
      description:'Rich moisturizing cream infused with skin-repairing ingredients.',
    },
    {
      id: 10,
      brand: 'SkinCeuticals',
      title: 'Skin Serum',
      rating: 4.3,
      reviews: 6400,
      image: Sk10,
      price: '$72.00',
      description:'Advanced serum that targets signs of aging and promotes an even tone.',
    }
    
  ];
  const goToDetails = (product) => {
    navigate(`/productdetails/${product.id}`, { state: { product } });
  };
  return (
    <div className="western-container">
      <div className="breadcrumb">
        Home / <b>Skincare</b>
      </div>

      <div className="header-row">
        <h2>Skincare - <span>529408 items</span></h2>
        <div className="sort-and-back">
          <div className="sort-by">Sort by: <b>Popularity</b></div>
          <button className="back-button-right" onClick={() => navigate(-1)}>← Back</button>
        </div>
      </div>

      <div className="main-section">
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-card" onClick={() => goToDetails(product)} style={{ cursor: 'pointer' }}>
              <img src={product.image} alt={product.title} />
              <div className="rating">
                {product.rating} ★ <span>({product.reviews})</span>
              </div>
              <h4>{product.brand}</h4>
              <p>{product.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Skincare;

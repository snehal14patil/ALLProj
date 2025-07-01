import React from 'react';
import './Western.css';
import { useNavigate } from 'react-router-dom';
import WeFloral from"../images/FLoralonepiece.jpg";
import WeSkirt from"../images/WeSkirt.jpg";
import We3 from"../images/We3.jpg";
import We4 from"../images/We4.jpg";
import We5 from"../images/We5.jpg";
import We6 from"../images/We6.jpg";
import We7 from"../images/We7.jpg";
import We8 from"../images/We8.jpg";
import We9 from"../images/We9.jpg";
import We10 from"../images/We10.jpg";
const Western = () => {
  const navigate = useNavigate();
  const products = [
      {
        id: 1,
        brand: 'GoSriKi',
        title: 'Printed Fit & Flare Midi Dress',
        rating: 3.8,
        reviews: 533,
        image: WeFloral,
        price: '$34.99',
        description: 'A breezy and beautiful midi dress featuring floral prints and a flattering fit & flare silhouette, perfect for casual outings or brunch dates.',
      },
      {
        id: 2,
        brand: 'Indo Era',
        title: 'Retro summer outfit',
        rating: 4.3,
        reviews: 6400,
        image: WeSkirt,
        price: '$41.50',
        description: 'Step back in style with this vintage-inspired retro summer outfit that keeps you cool while turning heads.',
      },
      {
        id: 3,
        brand: 'Askam',
        title: 'Floral Organza',
        rating: 4.3,
        reviews: 6400,
        image: We3,
        price: '$48.00',
        description: 'Elegant floral organza dress designed with delicate layers and a dreamy, flowy finish — ideal for special occasions.',
      },
      {
        id: 4,
        brand: 'Deluk',
        title: 'Retro Casual',
        rating: 4.3,
        reviews: 6400,
        image: We4,
        price: '$38.90',
        description: 'A comfortable, laid-back retro-inspired dress that combines style with ease — perfect for your day-to-day wardrobe.',
      },
      {
        id: 5,
        brand: 'Sham',
        title: 'Long Sleeve Ruffled High Waist Dress',
        rating: 4.3,
        reviews: 6400,
        image: We5,
        price: '$52.75',
        description: 'Feminine elegance meets comfort in this high-waist dress with romantic ruffles and graceful long sleeves.',
      },
      {
        id: 6,
        brand: 'Nira',
        title: 'Boho Ruffled High-Low Hem Dress',
        rating: 4.3,
        reviews: 6400,
        image: We6,
        price: '$46.20',
        description: 'A bohemian dream dress featuring a flowy high-low hemline and ruffled details that add movement and charm.',
      },
      {
        id: 7,
        brand: 'Mesh',
        title: 'Elegant Casual',
        rating: 4.3,
        reviews: 6400,
        image: We7,
        price: '$39.99',
        description: 'The perfect blend of sophistication and casual ease — a versatile piece for everything from lunch to evening strolls.',
      },
      {
        id: 8,
        brand: 'Lavendar',
        title: 'Romantic Vintage',
        rating: 4.3,
        reviews: 6400,
        image: We8,
        price: '$53.00',
        description: 'Whimsical and romantic, this vintage-style dress enchants with lace accents and soft lavender tones.',
      },
      {
        id: 9,
        brand: 'Rose',
        title: 'Vintage-Inspired Layered Dress',
        rating: 4.3,
        reviews: 6400,
        image: We9,
        price: '$49.99',
        description: 'Layers of charm come together in this vintage-style piece — flowy, feminine, and full of nostalgia.',
      },
      {
        id: 10,
        brand: 'Tulip',
        title: 'Floral Printed Dress',
        rating: 4.3,
        reviews: 6400,
        image: We10,
        price: '$36.45',
        description: 'A cheerful and colorful floral printed dress that brings springtime energy into any season.',
      }
    
    
    // Add more products...
  ];
  const goToDetails = (product) => {
    navigate(`/productdetails/${product.id}`, { state: { product } });
  };
  return (
    <div className="western-container">
      <div className="breadcrumb">Home / <b>Western Wear</b></div>

      <div className="header-row">
        <h2>Western Wear - <span>529408 items</span></h2>
        <div className="sort-by">Sort by: <b>Popularity</b></div>
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

export default Western;

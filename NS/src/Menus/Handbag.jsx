import React from 'react';
import './Handbag.css';
import { useNavigate } from 'react-router-dom';
import Ho1 from"../images/Ho1.jpg";
import Ho2 from"../images/Ho2.jpg";
import Ho3 from"../images/Ho3.jpg";
import Ho4 from"../images/Ho4.jpg";
import Ho5 from"../images/Ho5.jpg";
import Ho6 from"../images/Ho6.jpg";
import Ho7 from"../images/Ho7.jpg";
import Ho8 from"../images/Ho8.jpg";
import Ho9 from"../images/Ho9.jpg";
import Ho10 from"../images/Ho10.jpg";
const Handbag = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      brand: 'Gucci',
      title: 'White Ribbion Purse',
      rating: 3.8,
      reviews: 533,
      image: Ho1,
      price: '$39.00',
      description: 'White elegant ribbion handbag.',
    },
    {
      id: 2,
      brand: 'Prada',
      title: 'HandPurse',
      rating: 4.3,
      reviews: 6400,
      image: Ho2,
      price: '$45.50',
      description: 'Elegant handbag offering, ideal for long house gatherings.',
    },
    {
      id: 3,
      brand: 'V',
      title: 'Cherry HandPurse',
      rating: 4.3,
      reviews: 6400,
      image: Ho3,
      price: '$42.00',
      description: 'A sparkle of Cherry red color, perfect for housewarming parties or indoor wardrobe.',
    },
    {
      id: 4,
      brand: 'Coach',
      title: 'White handbag with comfort and elegance', 
      rating: 4.3,
      reviews: 6400,
      image: Ho4,
      price: '$53.25',
      description: 'Soft ribbon-accented bag that bring grace.',
    },
    {
      id: 5,
      brand: 'YSL',
      title: 'White handbag with comfort and elegance',
      rating: 4.3,
      reviews: 6400,
      image: Ho5,
      price: '$47.90',
       
    },
    {
      id: 6,
      brand: 'LouisViton',
      title: 'Ballet Heels',
      rating: 4.3,
      reviews: 6400,
      image: Ho6,
      price: '$41.75',
      description: 'Soft ballet-style heels designed for elegance and ease inside the home.',
    },
    {
      id: 7,
      brand: 'Servos',
      title: 'Shimmer Heels',
      rating: 4.3,
      reviews: 6400,
      image: Ho7,
      price: '$49.60',
      description: 'A dazzling touch of shimmer for intimate evening occasions at home.',
    },
    {
      id: 8,
      brand: 'Louis',
      title: 'Samba Heels',
      rating: 4.3,
      reviews: 6400,
      image: Ho8,
      price: '$46.00',
      description: 'Samba-inspired heels built for rhythm and comfort in indoor dance settings.',
    },
    {
      id: 9,
      brand: 'Shine',
      title: 'Pink Shine Shoes',
      rating: 4.3,
      reviews: 6400,
      image: Ho9,
      price: '$43.10',
      description: 'Glossy pink shoes with a subtle glow, designed for stylish home lounging.',
    },
    {
      id: 10,
      brand: 'Jeren',
      title: 'Printed Pearl LaceShoes',
      rating: 4.3,
      reviews: 6400,
      image: Ho10,
      price: '$50.80',
      description: 'Intricate pearl and lace detailing make these a graceful pick for family functions at home.',
    }
    // Add more products...
  ];
  const goToDetails = (product) => {
    navigate(`/productdetails/${product.id}`, { state: { product } });
  };
  return (
    <div className="western-container">
      <div className="breadcrumb">Home / <b>Footwear</b></div>

      <div className="header-row">
        <h2>Footwear - <span>529408 items</span></h2>
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

export default Handbag;

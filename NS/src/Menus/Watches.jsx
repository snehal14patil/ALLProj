import React from 'react';
import './Watches.css';
import { useNavigate } from 'react-router-dom';

import Wa1 from "../images/Wa1.jpg";
import Wa2 from "../images/Wa2.jpg";
import Wa3 from "../images/Wa3.jpg";
import Wa4 from "../images/Wa4.jpg";
import Wa5 from "../images/Wa5.jpg";
import Wa6 from "../images/Wa6.jpg";
import Wa7 from "../images/Wa7.jpg";
import Wa8 from "../images/Wa8.jpg";
import Wa9 from "../images/Wa9.jpg";
import Wa10 from "../images/Wa10.jpg";

const Watches = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      brand: 'Michael Kors',
      title: 'Glamour Redefined',
      rating: 3.8,
      reviews: 533,
      image: Wa1,
      price: '$199',
      description: 'A luxurious watch designed to elevate your everyday style.',
    },
    {
      id: 2,
      brand: 'Citizen',
      title: 'Precision and Perfection',
      rating: 4.3,
      reviews: 6400,
      image: Wa2,
      price: '$179',
      description: 'Engineered with the highest quality standards for everyday use.',
    },
    {
      id: 3,
      brand: 'Daniel Wellington',
      title: 'Minimalist Chic',
      rating: 4.3,
      reviews: 6400,
      image: Wa3,
      price: '$210',
      description: 'Elegant and timeless Scandinavian design.',
    },
    {
      id: 4,
      brand: 'Guess',
      title: 'Bold and Beautiful',
      rating: 4.3,
      reviews: 6400,
      image: Wa4,
      price: '$155',
      description: 'Make a statement with style and flair.',
    },
    {
      id: 5,
      brand: 'Seiko',
      title: 'Japanese Precision',
      rating: 4.3,
      reviews: 6400,
      image: Wa5,
      price: '$220',
      description: 'Famous for craftsmanship and durability.',
    },
    {
      id: 6,
      brand: 'Casio',
      title: 'Sporty and Stylish',
      rating: 4.3,
      reviews: 6400,
      image: Wa6,
      price: '$99',
      description: 'Perfect for sporty looks and tough conditions.',
    },
    {
      id: 7,
      brand: 'Emporio Armani',
      title: 'Timeless Luxury',
      rating: 4.3,
      reviews: 6400,
      image: Wa7,
      price: '$249',
      description: 'A luxury piece to reflect your identity.',
    },
    {
      id: 8,
      brand: 'Skagen',
      title: 'Danish Simplicity',
      rating: 4.3,
      reviews: 6400,
      image: Wa8,
      price: '$185',
      description: 'Modern design with an artistic touch.',
    },
    {
      id: 9,
      brand: 'Titan',
      title: 'Timeless Elegance',
      rating: 4.3,
      reviews: 6400,
      image: Wa9,
      price: '$160',
      description: 'Graceful styling for all occasions.',
    },
    {
      id: 10,
      brand: 'Fossil',
      title: 'Fusion of Fashion and Functionality',
      rating: 4.3,
      reviews: 6400,
      image: Wa10,
      price: '$200',
      description: 'A blend of vintage appeal and modern utility.',
    },
  ];

  const goToDetails = (product) => {
    navigate(`/productdetails/${product.id}`, { state: { product } });
  };

  return (
    <div className="western-container">
      <div className="breadcrumb">Home / <b>Watches</b></div>

      <div className="header-row">
        <h2>Watches - <span>{products.length} items</span></h2>
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

export default Watches;

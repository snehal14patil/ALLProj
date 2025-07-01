import React from 'react';
import './Footwear.css';
import { useNavigate } from 'react-router-dom';
import Fo1 from"../images/Fo1.jpg";
import Fo2 from"../images/Fo2.webp";
import Fo3 from"../images/Fo3.jpg";
import Fo4 from"../images/Fo4.jpg";
import Fo5 from"../images/Fo5.jpg";
import Fo6 from"../images/Fo6.jpg";
import Fo7 from"../images/Fo7.jpg";
import Fo8 from"../images/Fo8.jpg";
import Fo9 from"../images/Fo9.jpg";
import Fo10 from"../images/Fo10.jpg";
const Footwear = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      brand: 'Zara',
      title: 'Red Cherry Shoes',
      rating: 3.8,
      reviews: 533,
      image: Fo1,
      price: '$39.00',
      description: 'Bright red statement heels with a glossy finish, perfect for bold evenings.',
    },
    {
      id: 2,
      brand: 'Golden',
      title: 'Platform Heels',
      rating: 4.3,
      reviews: 6400,
      image: Fo2,
      price: '$45.50',
      description: 'Classic high-rise platform heels designed for all-day glamour and comfort.',
    },
    {
      id: 3,
      brand: 'Oasis',
      title: 'Ribbon Heels',
      rating: 4.3,
      reviews: 6400,
      image: Fo3,
      price: '$42.00',
      description: 'Delicate ribbon tie heels, combining charm and elegance for any outfit.',
    },
    {
      id: 4,
      brand: 'Glam and Glitter',
      title: 'Pearl Heel',
      rating: 4.3,
      reviews: 6400,
      image: Fo4,
      price: '$53.25',
      description: 'Stylish heels adorned with pearl accents, ideal for parties and weddings.',
    },
    {
      id: 5,
      brand: 'Jauguar',
      title: 'Wild Flower Heel',
      rating: 4.3,
      reviews: 6400,
      image: Fo5,
      price: '$47.90',
      description: 'A bold heel design inspired by wild floral prints, perfect for summer outings.',
    },
    {
      id: 6,
      brand: 'Leafof',
      title: 'Ballet Heels',
      rating: 4.3,
      reviews: 6400,
      image: Fo6,
      price: '$41.75',
      description: 'Graceful ballet-style heels for comfort, elegance, and effortless style.',
    },
    {
      id: 7,
      brand: 'Servos',
      title: 'Shimmer Heels',
      rating: 4.3,
      reviews: 6400,
      image: Fo7,
      price: '$49.60',
      description: 'Sparkling shimmer finish for a dazzling night out or festive occasion.',
    },
    {
      id: 8,
      brand: 'Louis',
      title: 'Samba Heels',
      rating: 4.3,
      reviews: 6400,
      image: Fo8,
      price: '$46.00',
      description: 'Latin-inspired samba heels for flair and rhythmic movement on the dance floor.',
    },
    {
      id: 9,
      brand: 'Shine',
      title: 'Pink Shine Shoes',
      rating: 4.3,
      reviews: 6400,
      image: Fo9,
      price: '$43.10',
      description: 'Chic and shiny pink shoes for a cute, confident, and stylish appearance.',
    },
    {
      id: 10,
      brand: 'Jeren',
      title: 'Printed Pearl Lace Shoes',
      rating: 4.3,
      reviews: 6400,
      image: Fo10,
      price: '$50.80',
      description: 'Detailed lace-up shoes with pearl embellishments and delicate print work.',
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

export default Footwear;

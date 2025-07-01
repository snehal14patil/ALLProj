import React from 'react';
import './Ethnic.css';
import { useNavigate } from 'react-router-dom';
import Et1 from"../images/Et1.jpg";
import Et2 from"../images/Et2.jpg";
import Et3 from"../images/Et3.jpg";
import Et4 from"../images/Et4.jpg";
import Et5 from"../images/Et5.jpg";
import Et6 from"../images/Et6.jpg";
import Et7 from"../images/Et7.jpg";
import Et8 from"../images/Et8.jpg";
import Et9 from"../images/Et9.jpg";
import Et10 from"../images/Et10.jpg";
const Ethnic = () => {
   const navigate = useNavigate();
  const products = [
    {
      id: 1,
      brand: 'Posh',
      title: 'Indian Ethnic Wear',
      rating: 3.8,
      reviews: 533,
      image: Et1,
      price: '$49.00',
      description: 'Traditional Indian ethnic outfit featuring vibrant colors and intricate detailing.',
    },
    {
      id: 2,
      brand: 'Indo',
      title: 'Indo-Western Ethnic',
      rating: 4.3,
      reviews: 6400,
      image: Et2,
      price: '$55.50',
      description: 'A fusion of Eastern elegance and Western cuts for a modern ethnic vibe.',
    },
    {
      id: 3,
      brand: 'Roop',
      title: 'Anarkali-Style Suit',
      rating: 4.3,
      reviews: 6400,
      image: Et3,
      price: '$62.00',
      description: 'Flared Anarkali-style suit designed for elegance, comfort, and celebration.',
    },
    {
      id: 4,
      brand: 'Stree',
      title: 'Retro Casual',
      rating: 4.3,
      reviews: 6400,
      image: Et4,
      price: '$38.75',
      description: 'A vintage-inspired casual look combining ethnic aesthetics with a retro feel.',
    },
    {
      id: 5,
      brand: 'Noor',
      title: 'Long Sleeve Ruffled High Waist Dress',
      rating: 4.3,
      reviews: 6400,
      image: Et5,
      price: '$48.99',
      description: 'Chic and flowy with a flattering high waist and delicate ruffle accents.',
    },
    {
      id: 6,
      brand: 'Shakti',
      title: 'Boho Ruffled High-Low Hem Dress',
      rating: 4.3,
      reviews: 6400,
      image: Et6,
      price: '$52.30',
      description: 'A playful bohemian look with layered ruffles and a breezy high-low hemline.',
    },
    {
      id: 7,
      brand: 'Hayat',
      title: 'Elegant Casual',
      rating: 4.3,
      reviews: 6400,
      image: Et7,
      price: '$44.20',
      description: 'Perfect for day-to-evening wear — subtle elegance meets relaxed design.',
    },
    {
      id: 8,
      brand: 'Niv',
      title: 'Romantic Vintage',
      rating: 4.3,
      reviews: 6400,
      image: Et8,
      price: '$47.10',
      description: 'Soft tones and vintage-inspired tailoring make this piece a timeless beauty.',
    },
    {
      id: 9,
      brand: 'Lotus',
      title: 'Vintage-Inspired Layered Dress',
      rating: 4.3,
      reviews: 6400,
      image: Et9,
      price: '$50.00',
      description: 'Layered design with heritage prints that bring a classic charm to the look.',
    },
    {
      id: 10,
      brand: 'Beauty',
      title: 'Floral Printed Dress',
      rating: 4.3,
      reviews: 6400,
      image: Et10,
      price: '$42.95',
      description: 'A breezy floral dress with timeless prints, ideal for festive and casual occasions.',
    }
    // Add more products...
  ];
  const goToDetails = (product) => {
    navigate(`/productdetails/${product.id}`, { state: { product } });
  };
  return (
    <div className="western-container">
      <div className="breadcrumb">Home / <b>Ethnic Wear</b></div>

      <div className="header-row">
        <h2>Ethnic Wear - <span>529408 items</span></h2>
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

export default Ethnic;

import React from 'react';
import './Jeans.css';
import { useNavigate } from 'react-router-dom';
import Je1 from"../images/Je1.jpg";
import Je2 from"../images/Je2.png";
import Je3 from"../images/Je3.png";
import Je4 from"../images/Je4.jpg";
import Je5 from"../images/Je5.jpg";
import Je6 from"../images/Je6.jpg";
import Je7 from"../images/Je7.jpg";
import Je8 from"../images/Je8.jpg";
import Je9 from"../images/Je9.jpg";
import Je10 from"../images/Je10.jpg";
const Jeans = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      brand: 'Posh',
      title: 'Short free Jeans',
      rating: 3.8,
      reviews: 533,
      image: Je1,
    },
    {
      id: 2,
      brand: 'Swash',
      title: ' Long free bottom Jeans',
      rating: 4.3,
      reviews: 6400,
      image: Je2,
    },
    {
        id: 3,
        brand: 'LifeStyle',
        title: 'Freestyle Jeans',
        reviews: 6400,
        image: Je3,
      },
      {
        id: 4,
        brand: 'CheckList',
        title: 'Fit loose bottom Jeans',
        rating: 4.3,
        reviews: 6400,
        image: Je4,
      },
      {
        id: 5,
        brand: 'Panther',
        title: 'Fit Jeans',
        rating: 4.3,
        reviews: 6400,
        image: Je5,
      },
      {
        id: 6,
        brand: 'Swoosh',
        title: 'Losse Jeans with ribbons',
        rating: 4.3,
        reviews: 6400,
        image: Je6,
      },
      {
        id: 7,
        brand: 'Veros',
        title: 'Long Jeans',
        rating: 4.3,
        reviews: 6400,
        image: Je7,
      },
      {
        id: 8,
        brand: 'Louis',
        title: 'Loose Bottom Jeans',
        rating: 4.3,
        reviews: 6400,
        image: Je8,
      },
      {
        id: 9,
        brand: 'Kaira',
        title: 'Loose Bottom White Jeans',
        rating: 4.3,
        reviews: 6400,
        image: Je9,
      },
      {
        id: 10,
        brand: 'Jaush',
        title: 'White Fitted Jeans',
        rating: 4.3,
        reviews: 6400,
        image: Je10,
      },
    // Add more products...
  ];
  const goToDetails = (product) => {
    navigate(`/productdetails/${product.id}`, { state: { product } });
  };
  return (
    <div className="western-container">
      <div className="breadcrumb">Home / <b>Jeans Wear</b></div>

      <div className="header-row">
        <h2>Jeans Wear - <span>529408 items</span></h2>
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

export default Jeans;

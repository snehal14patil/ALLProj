import React from 'react';
import './Kurtis.css';
import { useNavigate } from 'react-router-dom';
import Ku1 from"../images/Ku1.jpg";
import Ku2 from"../images/Ku2.jpg";
import Ku3 from"../images/Ku3.jpg";
import Ku4 from"../images/Ku4.jpg";
import Ku5 from"../images/Ku5.jpg";
import Ku6 from"../images/Ku6.jpg";
import Ku7 from"../images/Ku7.jpg";
import Ku8 from"../images/Ku8.jpg";
import Ku9 from"../images/Ku9.jpg";
import Ku10 from"../images/Ku10.jpg";
const Kurtis = () => {
    const navigate = useNavigate();
  const products = [
    {
      id: 1,
      brand: 'Posh',
      title: 'Printed Waist Side Cut Top',
      rating: 3.8,
      reviews: 533,
      image: Ku1,
      price: '$28.00',
      description: 'Chic side-cut top with elegant prints, perfect for casual and festive pairings.',
    },
    {
      id: 2,
      brand: 'Swash',
      title: 'Indo-Western Ethnic',
      rating: 4.3,
      reviews: 6400,
      image: Ku2,
      price: '$32.50',
      description: 'A fusion of tradition and modernity, designed to stand out at any gathering.',
    },
    {
      id: 3,
      brand: 'LifeStyle',
      title: 'Naira Cut Top',
      rating: 4.3,
      reviews: 6400,
      image: Ku3,
      price: '$30.90',
      description: 'Flowy and flattering Naira cut for comfort and elegance in every step.',
    },
    {
      id: 4,
      brand: 'CheckList',
      title: 'Printed Set Top',
      rating: 4.3,
      reviews: 6400,
      image: Ku4,
      price: '$34.00',
      description: 'Coordinated set with vibrant prints, ideal for a fresh and bold ethnic look.',
    },
    {
      id: 5,
      brand: 'Panther',
      title: 'Printed V Neck Top',
      rating: 4.3,
      reviews: 6400,
      image: Ku5,
      price: '$27.75',
      description: 'V-neckline hi hello meets floral prints, a versatile option for semi-formal occasions.',
    },
    {
      id: 6,
      brand: 'Swoosh',
      title: 'Printed Sharara',
      rating: 4.3,
      reviews: 6400,
      image: Ku6,
      price: '$36.20',
      description: 'Breezy sharara with ethnic motifs — easy to pair with contrasting tops.',
    },
    {
      id: 7,
      brand: 'Veros',
      title: 'Peplum Top',
      rating: 4.3,
      reviews: 6400,
      image: Ku7,
      price: '$31.10',
      description: 'Modern peplum silhouette with a comfortable fit and flattering flow.',
    },
    {
      id: 8,
      brand: 'Louis',
      title: 'Printed V-Neck Peplum Top',
      rating: 4.3,
      reviews: 6400,
      image: Ku8,
      price: '$33.80',
      description: 'Stylish peplum top with V-neck design and detailed ethnic print.',
    },
    {
      id: 9,
      brand: 'Kaira',
      title: 'Printed Pleated Top',
      rating: 4.3,
      reviews: 6400,
      image: Ku9,
      price: '$29.50',
      description: 'Pleated detailing meets subtle prints in this classy topwear essential.',
    },
    {
      id: 10,
      brand: 'Jaush',
      title: 'Floral Printed Dress',
      rating: 4.3,
      reviews: 6400,
      image: Ku10,
      price: '$38.00',
      description: 'A fresh floral dress designed for daytime charm and evening comfort.',
    }
    // Add more products...
  ];
  const goToDetails = (product) => {
    navigate(`/productdetails/${product.id}`, { state: { product } });
  };
  return (
    <div className="western-container">
      <div className="breadcrumb">Home / <b>Kurtis Wear</b></div>

      <div className="header-row">
        <h2>Kurtis Wear - <span>529408 items</span></h2>
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

export default Kurtis;

import React from 'react';
import './Casuals.css';
import { useNavigate } from 'react-router-dom';
import Ca1 from"../images/Ca1.jpg";
import Ca2 from"../images/Ca2.jpg";
import Ca3 from"../images/Ca3.jpg";
import Ca4 from"../images/Ca4.jpg";
import Ca5 from"../images/Ca5.jpg";
import Ca6 from"../images/Ca6.jpg";
import Ca7 from"../images/Ca7.jpg";
import Ca8 from"../images/ca8.jpg";
import Ca9 from"../images/Ca9.jpg";
import Ca10 from"../images/Ca10.jpg";
const Casuals = () => {
   const navigate = useNavigate();
  const products = [
    {
      id: 1,
      brand: 'Tiger',
      title: 'Cool Summer Outfit',
      rating: 3.8,
      reviews: 533,
      image: Ca1,
      price: '$34.99',
      description: 'A breezy and stylish summer outfit perfect for beating the heat in cool fashion.',
    },
    {
      id: 2,
      brand: 'Woosk',
      title: 'Elegant Winter Outfit',
      rating: 4.3,
      reviews: 6400,
      image: Ca2,
      price: '$59.99',
      description: 'Stay cozy and classy with this elegant winter ensemble designed for warmth and style.',
    },
    {
      id: 3,
      brand: 'Roar',
      title: 'Naira Cut Top',
      rating: 4.3,
      reviews: 6400,
      image: Ca3,
      price: '$28.50',
      description: 'Trendy Naira cut top with a contemporary silhouette, ideal for casual and festive vibes.',
    },
    {
      id: 4,
      brand: 'CheckList',
      title: 'Coffee T-Shirt and Jeans',
      rating: 4.3,
      reviews: 6400,
      image: Ca4,
      price: '$42.00',
      description: 'Your go-to combo: comfy coffee-toned tee and fitted denim — a streetwear favorite.',
    },
    {
      id: 5,
      brand: 'Panther',
      title: 'Denim Set',
      rating: 4.3,
      reviews: 6400,
      image: Ca5,
      price: '$48.75',
      description: 'Bold denim-on-denim set with a sleek finish — a confident, urban-ready outfit.',
    },
    {
      id: 6,
      brand: 'Swoosh',
      title: 'Classic Black One Piece',
      rating: 4.3,
      reviews: 6400,
      image: Ca6,
      price: '$39.90',
      description: 'Minimal, elegant, and timeless — this black one-piece is a wardrobe staple.',
    },
    {
      id: 7,
      brand: 'Veracse',
      title: 'Red Top with White Frill',
      rating: 4.3,
      reviews: 6400,
      image: Ca7,
      price: '$33.40',
      description: 'Brighten your look with a bold red top, elevated by chic white frill detailing.',
    },
    {
      id: 8,
      brand: 'Sky',
      title: 'V Neck Winter Outfit',
      rating: 4.3,
      reviews: 6400,
      image: Ca8,
      price: '$55.00',
      description: 'Soft and snug, this V-neck winter outfit is tailored for comfort with a flattering fit.',
    },
    {
      id: 9,
      brand: 'Shein',
      title: 'Woolen Top With White Pants',
      rating: 4.3,
      reviews: 6400,
      image: Ca9,
      price: '$49.99',
      description: 'A cozy woolen top matched with crisp white pants — perfect for a polished winter look.',
    },
    {
      id: 10,
      brand: 'Heers',
      title: 'Woolen Top with Black Frill',
      rating: 4.3,
      reviews: 6400,
      image: Ca10,
      price: '$44.20',
      description: 'Fashion-forward woolen top with dramatic black frill — for those who like to stand out.',
    }
    // Add more products...
  ];
  const goToDetails = (product) => {
    navigate(`/productdetails/${product.id}`, { state: { product } });
  };
  return (
    <div className="western-container">
      <div className="breadcrumb">Home / <b>Casual Wear</b></div>

      <div className="header-row">
        <h2>Casual Wear - <span>529408 items</span></h2>
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
export default Casuals;

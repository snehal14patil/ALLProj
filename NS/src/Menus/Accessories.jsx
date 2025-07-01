import React from 'react';
import './Accessories.css';
import { useNavigate } from 'react-router-dom';
import Ac1 from"../images/Ac1.jpg";
import Ac2 from"../images/Ac2.jpg";
import Ac3 from"../images/Ac3.jpg";
import Ac4 from"../images/Ac4.jpg";
import Ac5 from"../images/Ac5.jpg";
import Ac6 from"../images/Ac6.jpg";
import Ac7 from"../images/Ac7.jpg";
import Ac8 from"../images/Ac8.jpg";
import Ac9 from"../images/Ac9.jpg";
import Ac10 from"../images/Ac10.jpg";

const Accessories = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      brand: 'HomeMade',
      title: 'Crafted Bracelet',
      rating: 3.8,
      reviews: 533,
      image: Ac1,
      price: '$14.99',
      description: 'A delicately handcrafted bracelet made with love and artisanal charm — ideal for daily wear or gifting.',
    },
    {
      id: 2,
      brand: 'Viton',
      title: 'Frozen Necklace',
      rating: 4.3,
      reviews: 6400,
      image: Ac2,
      price: '$25.50',
      description: 'Inspired by icy elegance, this Frozen Necklace brings sparkle and grace to your neckline with every wear.',
    },
    {
      id: 3,
      brand: 'Daimond',
      title: 'Flower Crafted Earring',
      rating: 4.3,
      reviews: 6400,
      image: Ac3,
      price: '$19.99',
      description: 'Charming floral earrings, crafted with intricate detail to add a soft feminine touch to any outfit.',
    },
    {
      id: 4,
      brand: 'Glam and Glitter',
      title: 'Earrings',
      rating: 4.3,
      reviews: 6400,
      image: Ac4,
      price: '$22.00',
      description: 'Simple yet elegant earrings that shine with a touch of glam — versatile for both casual and formal looks.',
    },
    {
      id: 5,
      brand: 'Jauguar',
      title: 'Wild Flower Ring',
      rating: 4.3,
      reviews: 6400,
      image: Ac5,
      price: '$17.80',
      description: 'Nature meets design in this wildflower ring, crafted for the free-spirited soul.',
    },
    {
      id: 6,
      brand: 'Art',
      title: 'Colorful Bangles',
      rating: 4.3,
      reviews: 6400,
      image: Ac6,
      price: '$29.00',
      description: 'A vibrant set of colorful bangles that bring fun and festivity to every flick of your wrist.',
    },
    {
      id: 7,
      brand: 'Chaos',
      title: 'Designed Anklets',
      rating: 4.3,
      reviews: 6400,
      image: Ac7,
      price: '$15.45',
      description: 'Beautifully designed anklets that blend boho flair with modern aesthetics for everyday wear.',
    },
    {
      id: 8,
      brand: 'Shree',
      title: 'Gold Bajubandh',
      rating: 4.3,
      reviews: 6400,
      image: Ac8,
      price: '$44.99',
      description: 'Traditional gold bajubandh with intricate motifs — a timeless piece that exudes royal elegance.',
    },
    {
      id: 9,
      brand: 'K&R',
      title: 'Designed Hair Bow',
      rating: 4.3,
      reviews: 6400,
      image: Ac9,
      price: '$8.90',
      description: 'Cute and trendy hair bow designed for stylish hairdos — perfect for kids and teens.',
    },
    {
      id: 10,
      brand: 'Jeren',
      title: 'Handmade Rose Hair Clip',
      rating: 4.3,
      reviews: 6400,
      image: Ac10,
      price: '$10.50',
      description: 'A beautiful rose-shaped hair clip handmade with care — adds romantic flair to your hairstyle.',
    }
    // Add more products...
  ];
  const goToDetails = (product) => {
    navigate(`/productdetails/${product.id}`, { state: { product } });
  };
  return (
    <div className="western-container">
      <div className="breadcrumb">Home / <b>Accessories</b></div>

      <div className="header-row">
        <h2>Accessories - <span>529408 items</span></h2>
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

export default Accessories;

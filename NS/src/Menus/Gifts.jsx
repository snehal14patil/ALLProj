import React from 'react';
import './Gifts.css';
import { useNavigate } from 'react-router-dom';
import Gi1 from"../images/Gi1.jpg";
import Gi2 from"../images/Gi2.jpg";
import Gi3 from"../images/Gi3.jpg";
import Gi4 from"../images/Gi4.jpg";
import Gi5 from"../images/Gi5.jpg";
import Gi6 from"../images/Gi6.jpg";
import Gi7 from"../images/Gi7.jpg";
import Gi8 from"../images/Gi8.jpg";
import Gi9 from"../images/Gi9.jpg";
import Gi10 from"../images/Gi10.jpg";
const Gifts = () => {
  const navigate = useNavigate();
  const products = [
    {
        id: 1,
        brand: 'Red Cherry',
        title: 'Purple Gift Box',
        rating: 3.8,
        reviews: 533,
        image: Gi1,
        price: '$39.00',
        description: 'A lavender-themed self-care box with accessories and treats, perfect for birthdays or cozy evenings.',
      },
      {
        id: 2,
        brand: 'Heaven',
        title: 'Mini Dessert Globe',
        rating: 4.3,
        reviews: 6400,
        image: Gi2,
        price: '$45.50',
        description: 'A beautiful snow globe showcasing a cozy dessert cafe, ideal for gifting or décor.',
      },
      {
        id: 3,
        brand: 'Ribbon',
        title: 'Golden Accessories Set',
        rating: 4.3,
        reviews: 6400,
        image: Gi3,
        price: '$42.00',
        description: 'Traditional-style golden bangles and earrings set for festive indoor events.',
      },
      {
        id: 4,
        brand: 'Pearl ocean',
        title: 'Matte Lipstick Box',
        rating: 4.3,
        reviews: 6400,
        image: Gi4,
        price: '$53.25',
        description: 'A luxurious box of matte lipsticks with various shades, perfect for makeup lovers.',
      },
      {
        id: 5,
        brand: 'Wild Flower',
        title: 'Nail Polish Gift Set',
        rating: 4.3,
        reviews: 6400,
        image: Gi5,
        price: '$47.90',
        description: 'A collection of pastel pink nail polishes in a gift box, perfect for self-care days.',
      },
      {
        id: 6,
        brand: 'eda',
        title: 'Pink Self-Care Box',
        rating: 4.3,
        reviews: 6400,
        image: Gi6,
        price: '$41.75',
        description: 'An elegant pink gift set including slippers, beauty tools, and more for pampering moments.',
      },
      {
        id: 7,
        brand: 'Psher',
        title: 'Silver Sparkle Set',
        rating: 4.3,
        reviews: 6400,
        image: Gi7,
        price: '$49.60',
        description: 'A dazzling silver accessory set with jewelry and decor for indoor festivities.',
      },
      {
        id: 8,
        brand: 'Heal',
        title: 'Traditional Gift Hamper',
        rating: 4.3,
        reviews: 6400,
        image: Gi8,
        price: '$46.00',
        description: 'A curated hamper with ethnic footwear, perfume, and pampering items for celebrations.',
      },
      {
        id: 9,
        brand: 'Shine',
        title: 'Comfort Hamper Box',
        rating: 4.3,
        reviews: 6400,
        image: Gi9,
        price: '$43.10',
        description: 'Includes comfy indoor slippers, drink pouches, and soft apparel for lounging in style.',
      },
      {
        id: 10,
        brand: 'FlyHigh',
        title: 'Luxury Cosmetic Set',
        rating: 4.3,
        reviews: 6400,
        image: Gi10,
        price: '$50.80',
        description: 'An elegant collection of perfumes, lipsticks, and skincare items in a bouquet-style package.',
      }
      
    // Add more products...
  ];
  const goToDetails = (product) => {
    navigate(`/productdetails/${product.id}`, { state: { product } });
  };
  return (
    <div className="western-container">
      <div className="breadcrumb">Home / <b>Gifts</b></div>

      <div className="header-row">
        <h2>Gifts For Women - <span>529408 items</span></h2>
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

export default Gifts;

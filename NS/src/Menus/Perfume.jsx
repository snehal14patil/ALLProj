import React from 'react';
import './Perfume.css';
import { useNavigate } from 'react-router-dom';
import Pe1 from"../images/Pe1.jpg";
import Pe2 from"../images/Pe2.jpg";
import Pe3 from"../images/Pe3.jpg";
import Pe4 from"../images/Pe4.jpg";
import Pe5 from"../images/Pe5.jpg";
import Pe6 from"../images/Pe6.jpg";
import Pe7 from"../images/Pe7.jpg";
import Pe8 from"../images/Pe8.jpg";
import Pe9 from"../images/Pe9.jpg";
import Pe10 from"../images/pe10.jpg";
const Jeans = () => {
  const navigate = useNavigate();
  const products = [
    {
        id: 1,
        brand: 'Good Girl',
        title: 'Very Good Girl by Carolina Herrera',
        rating: 3.8,
        reviews: 533,
        price: '$95',
        description: 'A daring blend of red currant and exotic lychee with a seductive base of vetiver and vanilla.',
        image: Pe1,
      },
      {
        id: 2,
        brand: 'Dior',
        title: 'J’adore by Dior',
        rating: 4.3,
        reviews: 6400,
        price: '$120',
        description: 'A luminous floral bouquet of ylang-ylang, Damask rose, and jasmine, perfect for elegant wear.',
        image: Pe2,
      },
      {
        id: 3,
        brand: 'Valentino',
        title: 'Valentino Voce Viva',
        rating: 4.3,
        reviews: 6400,
        price: '$115',
        description: 'A modern floral woody scent blending orange blossom, golden gardenia, and crystal moss.',
        image: Pe3,
      },
      {
        id: 4,
        brand: 'Prada',
        title: 'Paradoxe by Prada',
        rating: 4.3,
        reviews: 6400,
        price: '$130',
        description: 'A fresh floral scent with neroli, amber accords, and a hint of sophistication.',
        image: Pe4,
      },
      {
        id: 5,
        brand: 'Miss Dior',
        title: 'Miss Dior Eau de Parfum',
        rating: 4.3,
        reviews: 6400,
        price: '$125',
        description: 'A romantic fragrance with centifolia rose, lily-of-the-valley, and soft musk base notes.',
        image: Pe5,
      },
      {
        id: 6,
        brand: 'Sanit Laurent',
        title: 'Libre by Yves Saint Laurent',
        rating: 4.3,
        reviews: 6400,
        price: '$110',
        description: 'Bold lavender essence blended with orange blossom and warm vanilla for a powerful scent.',
        image: Pe6,
      },
      {
        id: 7,
        brand: 'Chanel',
        title: 'Coco Mademoiselle by Chanel',
        rating: 4.3,
        reviews: 6400,
        price: '$135',
        description: 'A classic yet modern fragrance with notes of orange, patchouli, and Turkish rose.',
        image: Pe7,
      },
      {
        id: 8,
        brand: 'Poison',
        title: 'Hypnotic Poison by Dior',
        rating: 4.3,
        reviews: 6400,
        price: '$105',
        description: 'A deep and mysterious blend of almond, jasmine, and vanilla for an intense allure.',
        image: Pe8,
      },
      {
        id: 9,
        brand: 'Gucci',
        title: 'Gucci Flora Gorgeous Gardenia',
        rating: 4.3,
        reviews: 6400,
        price: '$118',
        description: 'A joyful floral fragrance with gardenia, jasmine, and a hint of brown sugar.',
        image: Pe9,
      },
      {
        id: 10,
        brand: 'Versace',
        title: 'Dylan Blue Pour Femme by Versace',
        rating: 4.3,
        reviews: 6400,
        price: '$102',
        description: 'A strong, sensual scent with blackcurrant, rose, and patchouli over a woody base.',
        image: Pe10,
      },
    // Add more products...
  ];
  const goToDetails = (product) => {
    navigate(`/productdetails/${product.id}`, { state: { product } });
  };
  return (
    <div className="western-container">
      <div className="breadcrumb">Home / <b>Perfume</b></div>

      <div className="header-row">
        <h2>Perfume - <span>529408 items</span></h2>
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

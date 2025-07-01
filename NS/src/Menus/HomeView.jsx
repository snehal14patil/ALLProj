import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomeView.css';
import Sidebar from "../Layout/Sidebar";
import NSLogo from "../images/NSLogo.png";
import Speakers from "../images/Speakers.png";
import Western from "../images/westernwear.jpg";
import Ethnic from "../images/ethnicwear.jpg";
import Kurti from "../images/kurtiswear.jpg";
import Jeans from "../images/Jeans.jpg";
import Casuals from "../images/casuals.jpg";
import Footwear from "../images/Footwear.jpg";
import Handbags from "../images/handbags.jpg";
import Accessories from "../images/Accessories.jpg";
import HairAccessories from "../images/Hairaccessiores.jpg";
import WatchImage from "../images/watches.jpg";
import Skincr from "../images/Skincare.jpg";
import Sk6 from"../images/Sk6.jpg";
import Gifts from"../images/Gifts.jpg";
import Perfumes from"../images/perfumes.jpg";
import Sk10 from"../images/SKincr.jpg";
const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const Role = sessionStorage.getItem("Role");

  const handleClick = () => navigate("/accessories");
  const handleWatchesClick = () => navigate("/watches");
  const handleSkincareClick = () => navigate("/skincare");
  const handlegiftsClick = () => navigate("/gifts");
  const handleperfumeClick = () => navigate("/perfume");
  const handlefavouritestClick = () => navigate("/favouritestore");
  const handlemyaccountClick = () => navigate("/myaccount");
  const handlewishlistClick = () => navigate("/wishlist");
  const handleshippinginfoClick = () => navigate("/shippinginfo");
  const handlebevendorClick = () => navigate("/AddProduct");
  const handleaddtocartClick = () => navigate("/addtocart");
  const handletrackorderClick = () => navigate("/trackorder");
   const handleproductlistClick = () => navigate("/productlist");
  const heroBanners = [
    {
      title: "60–70% Off on Accessories",
      description: "Shop our exclusive collection and save big on accessories!",
      image: HairAccessories,
      onClick: handleClick,
    },
    {
      title: "10% Off on Watches",
      description: "Special festive offer on stylish timepieces.",
      image: WatchImage,
      onClick: handleWatchesClick,
    },
    {
      title: "Glowing Skin Deals",
      description: "Skin essentials now up to 50% off!",
      image: Sk10,
      onClick: handleSkincareClick,
    }
  ];

  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex(prev => (prev + 1) % heroBanners.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {Role === "1" && (
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      )}

      <div className={`content-area ${Role === "1" && isSidebarOpen ? 'shifted' : ''}`}>
        <div className="top-navbar">
          <div className="logo">
            <img src={NSLogo} alt="NS Logo" className="logo-image" />
            <span>NS</span>
          </div>
          <input type="text" className="search-box" placeholder="Search" />
          <div className="nav-links">
            <span onClick={handlefavouritestClick}>My Favourite Stores</span>
            <span onClick={handleproductlistClick}>Products</span>
            <span onClick={handlewishlistClick}>Wishlist</span>
            <span onClick={handleshippinginfoClick}>Shipping Info</span>
            <span onClick={handlebevendorClick}>Be a vendor</span>
            <span onClick={handletrackorderClick}>Track order</span>
            <span onClick={handleaddtocartClick}>Checkout</span>
            <span onClick={handlemyaccountClick}>My Account</span>
          </div>
        </div>

      
        <div className="hero-banner active-slide">
          <div className="text-content">
            <h1><span className="highlight">{heroBanners[bannerIndex].title}</span></h1>
            <p>{heroBanners[bannerIndex].description}</p>
            <button onClick={heroBanners[bannerIndex].onClick}>Shop Now</button>
          </div>
          <div className="image-content">
            <img src={heroBanners[bannerIndex].image} alt="Hero Product" />
          </div>
        </div>
<br/>
<div className="dual-banner">
  <div
    className="box with-overlay"
    style={{ backgroundImage: `url(${Gifts})`, color: "white" }}
    onClick={handlegiftsClick}
  >
    <div className="overlay-content">
      <h3>Get <span className="highlight">30% Off</span> on Gifts</h3>
      <p>Special festive offer</p>
      <button className="btn-buy white">Buy Now</button>
    </div>
  </div>

  <div
    className="box with-overlay"
    style={{backgroundImage: `url(${Perfumes})`, color: "black" }}
    onClick={handleperfumeClick}
  >
    <div className="overlay-content dark-text">
    <h3>Get <span className="highlight">10% Off</span> on Perfume</h3>
    <p>Special festive offer</p>
      <button className="btn-buy black">Buy Now !!</button>
    </div>
  </div>
</div> <div className="top-deals-section">
          <div className="section-header">
            <h2>🛍️ Shop by <span className="highlight">Categories</span></h2>
          </div>

          <div className="product-cards">
            <Link to="/western"><div className="product-card"><img src={Western} alt="hello" /><h4>Western</h4><p className="rating">40-80% OFF</p><p className="sub-info">Shop Now</p></div></Link>
            <Link to="/ethnic"><div className="product-card"><img src={Ethnic} alt="Ethnic" /><h4>Ethnic</h4><p className="rating">50-80% OFF</p><p className="sub-info">Shop Now</p></div></Link>
            <Link to="/Kurtis"><div className="product-card"><img src={Kurti} alt="Kurtis" /><h4>Kurtis</h4><p className="rating">40-70% OFF</p><p className="sub-info">Shop Now</p></div></Link>
            <Link to="/jeans"><div className="product-card"><img src={Jeans} alt="Jeans" /><h4>Jeans</h4><p className="rating">50-80% OFF</p><p className="sub-info">Shop Now</p></div></Link>
            <Link to="/casuals"><div className="product-card"><img src={Casuals} alt="Casuals" /><h4>Casuals</h4><p className="rating">40-80% OFF</p><p className="sub-info">Shop Now</p></div></Link>
            <Link to="/footwear"><div className="product-card"><img src={Footwear} alt="Footwear" /><h4>FootWear</h4><p className="rating">40-80% OFF</p><p className="sub-info">Shop Now</p></div></Link>
            <Link to="/handbag"><div className="product-card"><img src={Handbags} alt="Handbags" /><h4>HandBags</h4><p className="rating">60-70% OFF</p><p className="sub-info">Shop Now</p></div></Link>
            <Link to="/accessories"><div className="product-card"><img src={Accessories} alt="Accessories" /><h4>Accessories</h4><p className="rating">UP TO 80% OFF</p><p className="sub-info">Shop Now</p></div></Link>
            <Link to="/watches"><div className="product-card"><img src={WatchImage} alt="Accessories" /><h4>Watches</h4><p className="rating">UP TO 80% OFF</p><p className="sub-info">Shop Now</p></div></Link>
            <Link to="/skincare"><div className="product-card"><img src={Sk6} alt="Accessories" /><h4>SkinCare</h4><p className="rating">UP TO 80% OFF</p><p className="sub-info">Shop Now</p></div></Link>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-left">
              <h4>NS Store</h4>
              <p>© 2025 NS Shopping. All rights reserved.</p>
            </div>
            <div className="footer-right">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;

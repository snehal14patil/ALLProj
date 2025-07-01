import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login/Login";
import Register from "./Login/Register";
import Home from "./Layout/Home";
import UserManagement from "./Menus/UserManagement";
import AddProduct from "./Menus/AddProduct";
import Products from "./Menus/Products";
import Customer from "./Menus/Customer";
import Orders from "./Menus/Orders"
import Homes from "./Menus/HomeView"
import Western from "./Menus/Western"
import Ethnic from "./Menus/Ethnic"
import Kurtis from "./Menus/Kurtis"
import Jeans from "./Menus/Jeans"
import Casuals from "./Menus/Casuals"
import Footwear from "./Menus/Footwear"
import Handbag from "./Menus/Handbag"
import Accessories from "./Menus/Accessories"
import Watches from "./Menus/Watches"
import Skincare from "./Menus/Skincare"
import FavouriteStore from "./Menus/FavouriteStore"
import ProductDetails from "./Menus/ProductDetails"
import Wishlist from "./Menus/WishList"
import ShippingInfo from "./Menus/ShippingInfo"
import Gift from "./Menus/Gifts"
import Perfum from "./Menus/Perfume"
import AddToCart from "./Menus/AddToCart"
import TrackOrder from "./Menus/TrackOrder"
import ProductList from "./Menus/ProductList"
import MyAccount from "./Menus/MyAccount"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/UserManagement" element={<UserManagement />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/homeview" element={<Homes />} />
        <Route path="/western" element={<Western />} />
        <Route path="/ethnic" element={<Ethnic />} />
        <Route path="/kurtis" element={<Kurtis />} />
        <Route path="/jeans" element={<Jeans />} />
        <Route path="/casuals" element={<Casuals />} />
        <Route path="/footwear" element={<Footwear />} />
        <Route path="/handbag" element={<Handbag />} />
       <Route path="/accessories" element={<Accessories />} />
        <Route path="/watches" element={<Watches />} /> 
        <Route path="/skincare" element={<Skincare />} /> 
        <Route path="/favouritestore" element={<FavouriteStore />} /> 
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shippinginfo" element={<ShippingInfo />} />
        <Route path="/gifts" element={<Gift />} />
        <Route path="/perfume" element={<Perfum />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/trackorder" element={<TrackOrder />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/myaccount" element={<MyAccount />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import ShopCategory from "./Pages/ShopCategory";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import Footer from "./Component/Footer";
import men_banner from './Assets/banner_mens.png'
import women_banner from './Assets/banner_women.png'
import kid_banner from './Assets/banner_kids.png'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory category="men" banner={men_banner} iddd={1}/>} />
          <Route path="/women" element={<ShopCategory category="women" banner={women_banner} iddd={2}/>} />
          <Route path="/kid" element={<ShopCategory category="kid" banner={kid_banner} iddd={3}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />}>
            <Route path="/product/:productId" element={<Product />} />
          </Route>
          <Route path="/*" element={<Navigate to={"/"} />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;

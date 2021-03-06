// import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import Products from "./components/Products";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";

export const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/products" element={<Products />} />
                <Route exact path="/products/:id" element={<Product />} />
                <Route exact path="/Cart/" element={<Cart />} />
                <Route exact path="/login/" element={<Login />} />
                <Route exact path="/contact/" element={<Contact />} />
                <Route exact path="/about/" element={<About />} />
            </Routes>
            <Footer />
        </>
    );
};

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
    const state = useSelector((state) => state.handleCart);
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">
                        Collection
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">
                                    Products
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <button className="btn">
                                <NavLink
                                    to="/login"
                                    className="btn btn-outline-dark rounded-pill"
                                >
                                    <i className="fa fa-sign-in mx-2"> Login</i>
                                </NavLink>
                                <NavLink
                                    to="/cart"
                                    className="btn btn-outline-dark mx-2 rounded-pill"
                                >
                                    <i className="fa fa-shopping-cart me-1">
                                        {" "}
                                        Cart ({state.length})
                                    </i>
                                </NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

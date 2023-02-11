import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";

export const Navbars = () => {

  const state =useSelector((state)=>state.handleCart);

  return (
    <>
      <Navbar bg="white" expand="lg" className="py-3 shadow-sm">
        <Container>
          <NavLink to="/" className="nav-link">
            <Navbar.Brand className="fw-bold fs-2 text-info">
              E-Shopping
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="/products" className="nav-link">Products</NavLink>
              <NavLink to="/about" className="nav-link">About</NavLink>
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </Nav>
            <div className="buttonos">
              <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i>Login
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i>Register
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>Cart ({state.length})
              </NavLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

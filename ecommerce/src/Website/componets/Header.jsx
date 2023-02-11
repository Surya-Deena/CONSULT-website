import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { Cartbtn } from "../Buttons/Cartbtn";
import { Login } from "../Buttons/Login";
import { Signup } from "../Buttons/Signup";

export const Header = () => {
  return (
    <>
      <Navbar bg="white" expand="lg" className="py-3 shadow-sm">
        <Container>
          <Navbar.Brand className="fs-3 fw-bold text-danger"><NavLink to="/" className="nav-link">THING Mobiles</NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto fs-5">
              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="/products" className="nav-link">Products</NavLink>
              <NavLink to="/about" className="nav-link">About</NavLink>
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </Nav>
              <Login/>
              <Signup/>
              <Cartbtn/> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

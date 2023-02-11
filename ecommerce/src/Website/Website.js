import React from 'react';
import './Web.css';
import { About } from './componets/About'
import { Contacts } from './componets/Contacts'
import { Products } from './componets/Products'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Header } from './componets/Header'
import { Footer } from './componets/Footer'
import { Home } from './componets/Home';
import { Details } from './componets/Details';
import Cart from './componets/Cart';
import { Checkout } from './componets/Checkout';
// import { Navbars } from './componets/Navbar'

export const Website = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/products" element={<Products/>}/>
    <Route exact path="/products/:id" element={<Details/> }/>
    <Route exact path="/cart" element={<Cart/>}/>
    <Route exact path="/checkout" element={<Checkout/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/contact" element={<Contacts/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

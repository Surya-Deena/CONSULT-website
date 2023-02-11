import React from 'react';
import Home from './componets/Home';
import { Navbars} from './componets/Navbar';
import './style.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Products } from './componets/Products';
import { Items } from './componets/items';
import Cart from './componets/Cart';

export const Site = () => {
  return (
    <>
    <BrowserRouter>
    <Navbars/>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/products' element={<Products/>}/>    
    <Route exact path='/products/:id' element={<Items/>}/>    
    <Route exact path='/cart' element={<Cart />}/>    
    </Routes>
    </BrowserRouter>
    </>
  )
}

import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { delCart } from '../redux/action';

export const Cart = () => {
    const state=useSelector((state)=>state.addCart);
    const dispatch =useDispatch();

    
    const cartItems=(product)=>{
        return(
            <div className='px-4 bg-light rounded-3'>
                <div className="container">
            <div className="row">
                <div className="col-md-4">
                <img src={product.image} alt={product.title} height="280px" width="180px"/>
                </div>
                <div className="col-md-4">
                <h3 >{product.title}</h3>
                <p className="lead fw-bold">
                    {product.qty} X ₹{product.price} = ₹
                    {product.qty * product.price}
                </p>
                <button className='btn btn-outline-dark me-4' onClick={()=>handleButton(product)}><i className='fa fa-minus'/></button>
                <button className='btn btn-outline-dark me-4' onClick={()=>handleButton(product)}><i className='fa fa-plus'/></button>
                </div>
            </div>
        </div>
            </div>
        )
    }

  return (
    <div>
        
    </div>
  )
}

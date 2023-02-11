import React from 'react';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import { Data } from './Data';

export const Products = () => {
  const cardItem=(item)=>{
    return(
      <Card style={{ width: '18rem' }} className="text-center my-3 py-2 mx-3 ms-md-5 ms-xl-3  " key={item.id}>
      <Card.Img variant="top" src={item.img} height="300px" className='proctimg'/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text className='lead fw-bold'>₹ {item.price}</Card.Text>
        <NavLink to={`/products/${item.id}`} className='btn bg-warning text-light fw-bold'>Buy Now</NavLink>
      </Card.Body>
    </Card>
    );
  }
  return (
    <>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Products</h1><hr/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row px-5 mx-5 px-md-0 mx-md-0">
          {Data.map(cardItem)}
        </div>
      </div>
    </>
  )
}

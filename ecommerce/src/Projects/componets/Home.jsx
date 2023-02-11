import React from 'react';
import Card from 'react-bootstrap/Card';
import { Products } from './Products';

const Home = () => {
  return (
    <>
    <Card className="text-white ">
      <Card.Img src="../imgs/hslide.jpg" alt="Card image" />
      <Card.ImgOverlay className='p-0 d-flex flex-column justify-content-center text-center'>
        <div className="container pt-0">
        <Card.Title className='display-4 fw-bold'>NEW SEASON COLLECTIONS</Card.Title>
        <Card.Text className='lead fs-2 '>
          CHECH OUT ALL COLLECTIONS
        </Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
    <Products/>
    </>
  )
}

export default Home
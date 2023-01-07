import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/esm/Button';

function Homepage() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../imgs/home1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='carouse'>
          <div className='contents'>
          <h3>BUSINESS CONSULTANCY</h3>
          <h1 className='display-4 fw-bold'>We Provide Solution On Your Business</h1>
          <Button className='me-4 rounded-pill p-2'>Get Goute</Button>
          <Button className='rounded-pill p-2'>Contact Us</Button>
          </div>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../imgs/home2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className='carouse'>
          <div className='contents'>
          <h3>BUSINESS CONSULTANCY</h3>
          <h1 className='fw-bold'>Take Our Help To Reach The Top Level</h1>
          <Button className='me-4 rounded-pill p-2'>Get Goute</Button>
          <Button className='rounded-pill p-2'>Contact Us</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Homepage;
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { About } from "./About";
import { Contacts } from "./Contacts";
import { Products } from "./Products";

export const Home = () => {
  return (
    <>
      <Carousel className="bg-white hom">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../web/happle1.webp"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../web/iphone.png"
            alt="Second slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../web/homeapple1.webp"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Products/>
      <About/>
      <Contacts/>
    </>
  );
}

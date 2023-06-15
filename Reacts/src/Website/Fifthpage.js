import "./Styles/fifth.css";
import Carousel from "react-bootstrap/Carousel";

function Fifthpage() {
  return (
    <div className="container-fluid mb-5">
      <div className="row fifth mb-5 px-5 ">
        <div className="col-6 mx-5 mt-5 px-5">
          <div className="px-5 mx-5 mt-4 pt-5">
            <h6 className="text-center wht py-3">REAL TESTIMONIALS</h6>
            <h3 className="text-center fw-bold px-5">
              WHAT THEY SAY ABOUT OUR COMPANY?
            </h3>
          </div>
          <Carousel className="mt-5 pt-3">
            <Carousel.Item className="">
                <div>
              <p className="carousx">
              Digital factory is group of  creative  smart minded people who helps you steer your Buissness in the right direction digitally.. Digital factory pondicherry  is the right place for business to grow.. And multiply 😊
              </p>
              <h3 className="text-center">Anand K</h3>
                </div>
            </Carousel.Item>
            <Carousel.Item className="">
                <div>
              <p className="carousx">
              Our experience with digital factory was seamless. They have an excellent team to guide us with the digital marketing. Their team is highly professional with in-depth subject knowledge.
              </p>
              <h3 className="text-center">Santhana Gopal V</h3>
                </div>
            </Carousel.Item>
            <Carousel.Item className="">
                <div>
              <p className="carousx">
              I had some issues with my website that I couldn't cope with. they were very helpful and thanks to them my website looks great and we are working together on my social media strategy now.
              </p>
              <h3 className="text-center">Subbu Rangan</h3>
                </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-5 mb-5 pb-5">
          <img
            src="../imgs/testimonials-optimized.webp"
            alt="loading..."
            className="mb-5 fimg"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Fifthpage;

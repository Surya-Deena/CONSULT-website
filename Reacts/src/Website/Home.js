import "./Styles/home.css";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <Carousel >
      <Carousel.Item className="bg-primary">
        <div className="row mt-4">
          <div className="col-7 p-5 text-white">
            <div className="ps-lg-5 pt-lg-5 ms-5">
              <div className="ps-lg-5 pt-lg-5 ">
                <h2 className="mt-4 ">END-TO-END DIGITAL MARKETING SERVICES</h2>
                <p className="fs-4 my-4">
                  We offer end-to-end digital marketing services that help in
                  the growth of start-ups and small medium enterprices through a
                  digital platform.
                </p>
                <button className="butn rounded-pill  px-3 py-2">
                  START NOW <i class="fa-solid fa-arrow-right ms-3"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-5">
            <img
              src="../imgs/firstslider.webp"
              className=" pe-5 py-5"
              alt="loading..."
              style={{ height: 600}}
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="bg-success">
        <div className="row mt-4">
          <div className="col-6 p-5 text-white">
            <div className="ps-lg-5 pt-lg-5 ms-5">
              <div className="ps-lg-5 pt-lg-5 ">
                <h2 className="mt-4 ">SOCIAL MEADIA MARKRTING</h2>
                <p className="fs-4 my-4 pe-5">
                  An effective social strategy can help you grow your business, maintain your social presence and engage with the audience.
                </p>
                <button className="butn rounded-pill  px-3 py-2">
                  START NOW <i class="fa-solid fa-arrow-right ms-3"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img
              src="../imgs/Secondslider.webp"
              className="pe-5"
              alt="loading..."
              
              style={{ height: 600 }}
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="bg-info">
        <div className="row mt-4">
          <div className="col-7 p-5 text-white">
            <div className="ps-lg-5 pt-lg-5 ms-5">
              <div className="ps-lg-5 pt-lg-5 ">
                <h2 className="mt-4 ">WEB DEVELOPMENT</h2>
                <p className="fs-4 my-4">
                  We build attractive CMS website for any business with great functionality and integration possible to promote your products & services.  
                </p>
                <button className="butn rounded-pill  px-3 py-2">
                  
                  START NOW <i class="fa-solid fa-arrow-right ms-3"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-5">
            <img
              src="../imgs/thirdslider.webp"
              className="pe-5"
              alt="loading..."
              style={{ height: 600 }}
            />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;

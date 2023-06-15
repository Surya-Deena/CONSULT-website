import "./Styles/first.css";
import Card from "react-bootstrap/Card";

function Firstpage() {
  return (
    <div className="container ">
      <div className="container text-center py-md-4 mx-5 ">
        <div className="mx-md-5 mt-md-5">
          <h2 className="head">INBOUND DIGITAL MARKETING AGENCY</h2>
          <div className="mx-5">
            <p className="txt mx-5 px-md-3">
              Digital Factory, an Best Inbound Digital Marketing Agency in
              Pondicherry specializing in <span>WordPress Web Development</span>
              , Web Design, Social Media Marketing and SEO services.
            </p>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-12  col-lg-6 col-xl-3 mb-md-5">
          <Card style={{ width: "18rem" }} className="text-center">
            <Card.Body>
              <div className="px-5 mx-4 ">
                <div className="px-3 my-4">
                  <div className="btn col-2 rounded-pill py-3 ">
                    <i class="fa-solid fa-laptop-code text-white"></i>
                  </div>
                </div>
              </div>
              <Card.Title className="text-center mb-3">
                Web Development
              </Card.Title>
              <Card.Text className="mx-3">
                Build attractive CMS websites for any business with great
                functionality and integration possible to promote your products
                & services.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12  col-lg-6 col-xl-3 mb-md-5">
          <Card style={{ width: "18rem" }} className="text-center">
            <Card.Body>
              <div className="px-5 mx-4 ">
                <div className="px-3 my-4">
                  <div className="btn col-2 rounded-pill py-3 ">
                    <i class="fa-sharp fa-solid fa-globe text-white"></i>
                  </div>
                </div>
              </div>
              <Card.Title className="text-center mb-3">
                Social Media Marketing
              </Card.Title>
              <Card.Text className="mx-3">
                Create, publish, and promote engaging content to generate and
                build a dedicated customer fan base.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12  col-lg-6 col-xl-3 mb-md-5">
          <Card style={{ width: "18rem" }} className="text-center">
            <Card.Body>
              <div className="px-5 mx-4 ">
                <div className="px-3 my-4">
                  <div className="btn col-2 rounded-pill py-3 ">
                    <i class="fa-solid fa-magnifying-glass text-white"></i>
                  </div>
                </div>
              </div>
              <Card.Title className="text-center mb-3">
                Search Engine Optimization
              </Card.Title>
              <Card.Text className="mx-3">
                Get more website traffic, more customers, and more online
                visibility with powerful SEO services.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12  col-lg-6 col-xl-3 mb-md-5">
          <Card style={{ width: "18rem" }} className="text-center">
            <Card.Body>
              <div className="px-5 mx-4 ">
                <div className="px-3 my-4">
                  <div className="btn col-2 rounded-pill py-3 ">
                    <i class="fa-solid fa-paintbrush text-white"></i>
                  </div>
                </div>
              </div>
              <Card.Title className="text-center mb-3">
                Graphic Designing
              </Card.Title>
              <Card.Text className="mx-3">
                Craft your planning and ideas as a way to promote and sell
                products, to convey a message, or to develop a brand identity.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="d-flex justify-content-center mb-5">
        <p className="clr rounded-pill  text-white h6  px-4 py-3">
          VIEW MORE
          
          <i class="fa-solid fa-arrow-right ms-3"></i>
        </p>
      </div>
    </div>
  );
}

export default Firstpage;

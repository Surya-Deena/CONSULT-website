import "./Styles/sixth.css";
import Card from "react-bootstrap/Card";

function Sixthpage() {
  return (
    <div className="container mb-5">
      <div className="text-center txts my-5">
        <h6 className="wht ">OUR BLOG</h6>
        <h3>OUR LATEST MEDIA</h3>
        <p>
          Join us and receive Inbound exclusive advertising tips that we most
          effectively share with our subscribers.
          <br /> And be the first to learn about new content updates.
        </p>
      </div>
      <div className="conatiner mb-5 pb-5">
        <div className="row px-5">
          <div className="col-4 px-5">
            <Card className="w-100 h-100">
              <Card.Img
                variant="top"
                src="../imgs/Customer-Engagement.webp"
                style={{ height: "190px" }}
                className="w-100"
              />
              <Card.Body>
                <span className="tim">
                  <i class="fa-solid fa-clock text-"></i> 02/09/2022
                </span>
                <Card.Title className="mt-2">
                  Tips to Improve Customer Engagement from Google My Business
                </Card.Title>
                <Card.Text className="ctxt">
                  Google My Business is an essentialGoogle platform that helps
                  you engage with customers and showcase your business, so
                  you...
                  <div className="vmr">
                    View more <i class="fa-solid fa-arrow-right"></i>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4 px-5">
            <Card className="w-100 h-100">
              <Card.Img
                variant="top"
                src="../imgs/Tips-Growing.webp"
                style={{ height: "190px" }}
                className="w-100"
              />
              <Card.Body>
                <span className="tim">
                  <i class="fa-solid fa-clock text-"></i> 02/09/2022
                </span>
                <Card.Title className="mt-2">
                  Important SEO Tips for Your Startup Business
                </Card.Title>
                <Card.Text className="ctxt">
                  If it were a shop that served good food and ice cream, had
                  access to the docks, and had...
                  <div className="vmr">
                    View more <i class="fa-solid fa-arrow-right"></i>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4 px-5">
            <Card className="w-100 h-100">
              <Card.Img
                variant="top"
                src="../imgs/WAYS-TO-SPEED.webp"
                style={{ height: "190px" }}
                className="w-100 "
              />
              <Card.Body>
                <span className="tim">
                  <i class="fa-solid fa-clock text-"></i> 02/09/2022
                </span>
                <Card.Title className="mt-2">
                  10 Ways to Speed Up WordPress Website
                </Card.Title>
                <Card.Text className="ctxt">
                  Ever since Google announced the launch of page speed as a
                  metric used to determine SEO ranking, website owners...
                  <div className="vmr">
                    View more <i class="fa-solid fa-arrow-right"></i>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center ">
        <div className="btn sbtn rounded-pill px-3 ">
          View more <i class="fa-solid fa-arrow-right ms-2"></i>
        </div>
      </div>
    </div>
  );
}

export default Sixthpage;

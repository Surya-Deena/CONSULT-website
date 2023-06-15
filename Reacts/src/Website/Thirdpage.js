import "./Styles/third.css";
import Card from "react-bootstrap/Card";

function Thirdpage() {
  return (
    <div className="container py-2 py-lg-5 ">
      <h3 className="dot">WHY CHOOSE US?</h3>
      <div className=" container row mt-5">
        <div className="col-4">
          <Card style={{ height: "16rem" }}>
            <div className="row">
              <div className="col-3 px-4 ms-3 mt-3">
                <div className="br on px-3 py-3 ps-3 pe-2 ">01</div>
              </div>
              <div className="col-8">
                <Card.Body>
                  <Card.Title className="fw-bold"   >EXCELLENT SUPPORT</Card.Title>
                  <Card.Text>
                    Our wide experience in Inbound Digital marketing methods
                    combined with current technology solutions gives us the edge
                    to deliver assured results.
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-4">
          <Card style={{ height: "16rem" }}>
            <div className="row">
              <div className="col-3 px-4 ms-3 mt-3">
                <div className="br tw px-3 py-3 ps-3 pe-2 ">02</div>
              </div>
              <div className="col-8">
                <Card.Body>
                  <Card.Title className="fw-bold">RESULT ORIENTED</Card.Title>
                  <Card.Text>
                  We strive to deliver RESULTS! We use analytical tools to monitor results and adapt to alternative plans based on the numbers to ensure our clients get what they signed up for.
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-4">
          <Card style={{ height: "16rem" }}>
            <div className="row">
              <div className="col-3 px-4 ms-3 mt-3">
                <div className="br tr px-3 py-3 ps-3 ">03</div>
              </div>
              <div className="col-8">
                <Card.Body>
                  <Card.Title className="fw-bold">STRATEGIC APPROACH</Card.Title>
                  <Card.Text>
                  We believe in building the best strategy to produce expected results – we develop, test and execute the best digital marketing strategies based on the nature of our clients’ business.
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Thirdpage;

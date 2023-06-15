import "./Styles/Eighth.css";

function Eighthpage() {
  return (
    <div className="container-fluid eg p-4 w-100">
      <div className="row p-5 m-5">
        <div className="col-3 ">
          <img
            src="../logos/logo.webp"
            alt=""
            className="h-25"
            style={{ width: "14rem" }}
          />
          <p className="text-white mt-3 fcol pe-1  ">
            As an inbound digital marketing agency, we focus on quality,
            innovation, and speed to deliver <br /> results and help grow our
            clients’ businesses.
          </p>
          <div className="row">
            <div className="col">
              <div className="btn px-1  sicon bg-white ">
                <i class="fa-brands fa-facebook-f sicon text-primary"></i>
              </div>
              <div className="btn px-1 sicon bg-white mx-1">
                <i class="fa-brands fa-instagram text-warning"></i>
              </div>
              <div className="btn px-1 sicon bg-white">
                <i class="fa-brands fa-twitter text-info"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 ">
          <h4 className="text-white mb-4">Contact Info</h4>
          <h5 className="fw-bold text-info">Address:</h5>
          <p className="text-white">
            First Floor, 95 – D Needarajappaiyar Street, Pondicherry – 605001
          </p>
          <p className="text-white">
            <span className="text-info fw-bold h5">Email:</span>{" "}
            info@digitalfactoryindia.com
          </p>
          <p className="text-white">
            <span className="text-info fw-bold h5">Phone:</span> 0413 2222136
          </p>
          <p className="text-white">
            <span className="text-info fw-bold h5">Open: </span> Mon – Sat 9:00
            am – 6:00 pm
          </p>
        </div>
        <div className="col-3">
          <h4 className="text-white mb-4 ps-2">Services</h4>
          <div className="ps-3">
            <p className="text-info">Web Development</p>
            <p className="text-info">Social Media Marketing</p>
            <p className="text-info">Search Engine Optimzation</p>
            <p className="text-info">Branding and Creative  Designing</p>
            <p className="text-info">Ecommerce Development</p>
          </div>
        </div>
        <div className="col-3">
          <img src="../imgs/lastimg.webp" alt="" className="w-100 p-1 h-100" />
        </div>
      </div>
      <hr className="text-white"/>
      <p className="text-center cop text-info pt-4">
        Copyright <span>&#169;</span> 2020 DIGITAL FACTORY
      </p>
    </div>
  );
}

export default Eighthpage;

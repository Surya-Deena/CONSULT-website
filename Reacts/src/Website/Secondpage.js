import "./Styles/second.css";

function Secondpage() {
  return (
    <div className="container-fluid mb-5">
      <div className="row sec mb-5 pb-5 ">
        <div className="col-1"></div>
        <div className="col-5 ms-5 mt-5">
          <div className="mt-5 ">
            <p className="wht fw-bold">WHAT WE DO</p>
            <h4>END-TO-END DIGITAL MARKETING SERVICES</h4>
            <li> 
              We help your business get listed and found online on searches.
            </li>
            <li>We build responsive CMS Websites with great functionality.</li>
            <li>We upgrade retail businesses to online eCommerce stores.</li>
            <li>
              We enhance your brand visibility and follower base on social
              channels.
            </li>
            <li>
              We take your business to social media channels to sell your
              product
            </li>
            <li>
              We generate leads for your business through Google Ads, Facebook,
              Twitter & Instagram Campaigns.
            </li>
            <li>
              We create effective info-graphic images and videos to engage your
              target audience groups
            </li>
            <li>
              We can manage your branding, web development, digital marketing,
              social media portfolio and online reputation of your business.
            </li>
            <img src="../imgs/google-review.webp" alt="as" className="w-25 mb-5 mt-2" />
          </div>
        </div>
        <div className="col-5 ps-5 mb-5 pb-5">
          <img src="../imgs/digital-marketing.webp" alt="loading..." className="mb-5" />
        </div>
      </div>
    </div>
  );
}

export default Secondpage;

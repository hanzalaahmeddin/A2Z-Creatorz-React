import React, { useEffect } from "react";
import "./Testimonials.css";

import clientReviewsImg from '../../assets/images/Image.png';

function Testimonials() {

  useEffect(() => {
    // Check if script is already loaded
    if (!document.querySelector('script[src="https://widget.clutch.co/static/js/widget.js"]')) {
      const script = document.createElement("script");
      script.src = "https://widget.clutch.co/static/js/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="testimonials-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={clientReviewsImg}
              alt="Client Reviews"
              className="img-fluid fade-in-delay-2"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6">
            <h2 className="sub-main-title-black fade-in-delay-1">
              Testimonials
            </h2>

            <h4 className="testimonials-subtitle fade-in-delay-2 mb-4">
              Hear From Those Who’ve{" "}
              <span className="fw-bold">Experienced Our Impact</span>
            </h4>

            {/* CLUTCH REVIEWS */}
            <div
              className="clutch-widget fade-in-delay-3"
              data-url="https://widget.clutch.co"
              data-widget-type="12"
              data-height="375"
              data-nofollow="true"
              data-expandifr="true"
              data-scale="100"
              data-reviews="361482,359538,359226,358912,358324,356231,354521"
              data-clutchcompany-id="541174"
            ></div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;

import React from "react";
import Heading from "../common/Heading";
import { about } from "../data/Data";

export default function About() {
  const val = {
    btn1Link: "#", // Replace with your dynamic link
    btn1: "Learn More", // Replace with your button text
  };
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to{" "}
                <span className="text-primary text-uppercase">
                  oh my place!
                </span>
              </h1>
              <p className="mb-4">
                Welcome to Oh My Place, your ultimate destination for fully
                furnished co-living, corporate suites, and luxury PG in Noida.<br/>
                We’re dedicated to helping professionals save money and enhance
                employee retention. Our services encompass co-living spaces and
                PGs, supported by a dedicated relationship manager, catering to
                corporate workforce stay requirements. Our resident community is
                exclusively comprised of KYC-verified working professionals,
                ensuring a secure living environment. Discover hassle-free
                living at Oh My Place – your preferred choice for co-living
                spaces and branded PGs in Noida.
              </p>
              {/* <div className="row g-3 pb-4">
                {about.map((item, key) => (
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        {item.icon}
                        <h2 className="mb-1" data-toggle="counter-up">
                          {item.count}
                        </h2>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}


              {/* <a className="btn btn-primary py-3 px-5 mt-2" href="">
                BOOK MY PLACE
              </a> */}

              <a
                  href={val.btn1Link} // Dynamically set the href attribute
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  style={{ marginTop: "20px", display: "inline-block" }}
                >
                  {val.btn1}
                </a>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.1s"
                    src="/assets/img/Noida Sector 137.webp"
                    style={{ marginTop: "25%" }}
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.3s"
                    src="/assets/img/sector-93.webp"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-50 wow zoomIn"
                    data-wow-delay="0.5s"
                    src="/assets/img/Sector-135-Noida.webp"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.7s"
                    src="/assets/img/sector-62.webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

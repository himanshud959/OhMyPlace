import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData } from "../data/Data";

export default function Carousel() {
  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <Slider ref={sliderRef} {...settings}>
              {carouselData.map((val, index) => (
                <div className="carousel-item" key={index}>
                  <img className="w-100" src={val.img} alt="Image" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: "700px" }}>
                      <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">
                        {val.subtitle}
                      </h6>
                      <h1 className="display-3 text-white mb-4 animated slideInDown">
                        {val.title}
                      </h1>
                      {/* <a
                        href={val.btn1Link} // Dynamically set the href attribute
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                      >
                        {val.btn1}
                      </a> */}
                      <a
                        href={val.btn1Link} // Dynamically set the href attribute
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                        style={{ marginTop: "40px", display: "inline-block" }}
                      >
                        {val.btn1}
                      </a>
                      <div className="d-flex justify-content-center mt-5">
                        <div className="row">
                          <div className="col-md-6">
                            <p className="text-white text-center">
                              <strong>Short Stay Plan:</strong>
                              <br />
                              Zero Deposit
                              <br />
                              Flexible Checkout
                              <br />
                              All-Inclusive Rent
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p className="text-white text-center">
                              <strong>Long Stay Plan:</strong>
                              <br />
                              Deposit Refund Guarantee
                              <br />
                              Quality Meal Plan
                              <br />
                              Affordable Rent Option
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={previous}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={next}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

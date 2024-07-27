import React from "react";
import { socialIcons, team } from "../data/Data";
import { Link } from "react-router-dom";
import CommonHeading from "../common/CommonHeading";

export default function Teams() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Your preference"
            subtitle="A Place for Singles, Couples, and Friends!"
            // title="Staffs"
          />
          <div className="row justify-content-center g-4">
            {team.map((item, index) => (
              <div
                className="col-lg-4 col-md-6 d-flex justify-content-center wow fadeInUp"
                data-wow-delay="0.1s"
                key={index}
              >
                <div className="rounded shadow overflow-hidden text-center">
                  <div className="position-relative">
                    <img className="img-fluid" src={item.image} alt="img" />
                  </div>
                  <div className="p-4 mt-3">
                    <h5 className="fw-bold mb-0">{item.name}</h5>
                    <small>{item.designation}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import CommonHeading from "../common/CommonHeading";
import { services } from "../data/Data";

export default function Services() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <CommonHeading
              heading="Amenities Offered"
              // title="Services"
              subtitle="Unlock a Real Fully Furnished Co-Living in Noida!"
            />
          </div>
          {/* <div className="row g-4">
            {services.map((item, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <a className="service-item rounded" href="">
                  <div className="service-icon bg-transparent border rounded p-1">
                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      {item.icon}
                    </div>
                  </div>
                  <h5 className="mb-3">{item.name}</h5>
                  <p className="text-body mb-0">{item.discription}</p>
                </a>
              </div>
            ))}
          </div> */}

          <div className="row g-4">
            {services.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <a className="service-item rounded" href="">
                  <div className="service-icon bg-transparent border rounded p-1">
                    <div className="w-80 h-80 border rounded d-flex align-items-center justify-content-center">
                      <img
                        src={item.img}
                        alt={item.name}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                  </div>
                  <h5 className="mb-3">{item.name}</h5>
                  <p className="text-body mb-0">{item.description}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

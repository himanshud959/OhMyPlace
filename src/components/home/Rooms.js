import React from "react";
import CommonHeading from "../common/CommonHeading";
import { facility, roomItems } from "../data/Data";

export default function Rooms() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="OUR PRESENCE"
            // title="Rooms"
            subtitle="We are homegrown in Noida (Delhi NCR) and planning to come to your city soon."
          />
          <div className="row g-4">
            {roomItems.map((item, key) => (
              <div key={key} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="room-item shadow rounded overflow-hidden d-flex flex-column h-100">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid room-img"
                      src={item.img}
                      alt="Room"
                      style={{ height: '200px', objectFit: 'cover' }} // Fixed height for image
                    />
                    {/* Uncomment if you want to show price tag */}
                    {/* <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      {item.price}
                    </small> */}
                  </div>
                  <div className="p-4 flex-grow-1 d-flex flex-column">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">{item.name}</h5>
                      <div className="ps-2">{item.star}</div>
                    </div>
                    <div className="d-flex mb-3">
                      {facility.map((fac, index) => (
                        <small key={index} className="border-end me-3 pe-3">
                          {fac.icon}
                          {fac.quantity} {fac.facility}
                        </small>
                      ))}
                    </div>
                    <p className="text-body mb-3 flex-grow-1">{item.description}</p>
                    <div className="d-flex justify-content-between">
                      <a
                        className="btn btn-sm btn-primary rounded py-2 px-4"
                        href=""
                      >
                        {item.yellowbtn}
                      </a>
                      <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">
                        {item.darkbtn}
                      </a>
                    </div>
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

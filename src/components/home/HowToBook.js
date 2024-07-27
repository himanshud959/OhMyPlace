import React from "react";
import CommonHeading from "../common/CommonHeading";

export default function HowToBooks() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="HOW TO BOOK"
            subtitle="Book comfortable, fully furnished Studio Rooms, 1RKs, and Flatmates in Noida in just three easy steps!"
          />
          <div className="row text-center mt-5">
            <div className="col-lg-4">
              <img src="../assets/img/one_circle-svg.webp" alt="Step 1" className="mb-3" />
              <h4 className="mb-3">Schedule a Visit</h4>
              <p>
                Choose between managed apartments and co-living rooms in Noida.
                Visit the property online or offline beforehand.
              </p>
            </div>
            <div className="col-lg-4">
              <img src="../assets/img/two_circle-svg.webp" alt="Step 2" className="mb-3" />
              <h4 className="mb-3">Book Online</h4>
              <p>
                Use an easy online form to apply and book the home you want. Our
                Sales Team will call you to confirm your reservation.
              </p>
            </div>
            <div className="col-lg-4">
              <img src="../assets/img/three_circle-svg.webp" alt="Step 3" className="mb-3" />
              <h4 className="mb-3">Move hassle-free</h4>
              <p>
                Once everything is set up, it’s time to move in. Just follow the
                provided directions and bring your luggage!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

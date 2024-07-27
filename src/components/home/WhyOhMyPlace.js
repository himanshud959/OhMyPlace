import React from "react";
import CommonHeading from "../common/CommonHeading";

export default function WhyOhMyPlaces() {
  const val = {
    btn1Link: "#", // Replace with your dynamic link
    btn1: "BOOK NOW", // Replace with your button text
  };

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="WHY CHOOSE OH MY PLACE?"
            subtitle={
              <>
                <span
                  style={{
                    display: "block",
                    marginTop: "20px",
                    fontSize: "18px",
                  }}
                >
                  We offer exclusive homes designed for professionals – Singles,
                  Couples, and Small Families. Explore our{" "}
                  <span style={{ color: "orange" }}>Short Stays Plan</span> for
                  hassle-free living. If you’re considering a longer stay, our{" "}
                  <span style={{ color: "orange" }}>Long Stays Plan</span> offers
                  additional benefits. Daily rates apply for stays under 1 month.
                  No deposit is required for stays under 3 months. For longer
                  stays, get our budget-friendly monthly rates.
                </span>
                <a
                  href={val.btn1Link} // Dynamically set the href attribute
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  style={{ marginTop: "70px", display: "inline-block" }}
                >
                  {val.btn1}
                </a>
              </>
            }
          />
        </div>
      </div>
      {/* Added spacing to ensure button doesn't touch the footer */}
      <div style={{ height: "50px" }}></div>
    </>
  );
}

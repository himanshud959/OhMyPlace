import { Link } from "react-router-dom";
import { footerContact, footerItem, socialIcons } from "../data/Data";
// import Newsletter from "../home/Newsletter";

export default function Footer() {
  const year = new Date().getFullYear();

  const rentalDetails = [
    {
      title: "Private Rooms for Rent in Noida",
      points: [
        "Single Sharing Private 1RK Rooms Near Noida Sector 142",
        "Single Sharing Room – PG in Noida Sector 44",
        "Single Sharing Room Neat Noida Sector 93 & 132",
        "Single Sharing Room – PG in Noida Sector 58 Near 62",
        "Single Sharing Room – PG in Noida Sector 135",
      ],
    },
    {
      title: "Shared Rooms for Rent in Noida",
      points: [
        "Double Sharing Room in 1RK Near Noida Sector 142",
        "Double Sharing Room Near Noida Sector 93 & 132",
        "Double Sharing Room – PG in Noida Sector 58 Near 62",
        "Double Sharing Room – PG in Noida Sector 135",
        "Double Sharing Rooms – PG in Noida Sector 44",
      ],
    },
    {
      title: "Apartments for Rent in Noida",
      points: [
        "OMP Co-living PG Apartment Noida Sector 168",
        "Preoccupied Apartment Rooms in Noida Sector 137",
        "Preoccupied Apartment Rooms in Noida Sector 143",
        "Preoccupied Apartment Rooms in Noida Sector 137",
        "Preoccupied Apartment Rooms in Noida Sector 143",
      ],
    },
  ];

  return (
    <div style={{ marginTop: '100px' }}>
      {/* <Newsletter /> */}
      <div
        className="container-fluid bg-dark text-light footer"
        style={{ paddingTop: "5rem", paddingBottom: "3rem" }} // Increased padding
      >
        <div className="container">
          {/* New section for rental details */}
          <div className="row g-4 mb-5">
            {rentalDetails.map((section, index) => (
              <div className="col-md-4" key={index}>
                <h6 className="section-title text-start text-primary text-uppercase mb-3">
                  {section.title}
                </h6>
                <ul className="list-unstyled">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="mb-2">
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="bg-primary rounded p-3">
                <Link to="/">
                  <h1 className="text-white text-uppercase mb-2">
                    Our Mission
                  </h1>
                </Link>
                <p className="text-white mb-0">
                  Our mission is to transform mid-to-long-term housing by
                  revolutionizing the plug-and-play home experience through
                  digital innovation and fostering a sense of belonging. We
                  understand your professional journey and the challenges that
                  come with relocating, moving in, and moving out. Through our
                  carefully selected home-style facilities, amenities,
                  community, and safety, we provide a caring and exciting living
                  environment. At Ohmyplace Solutions Pvt Ltd, we believe in the
                  power of teamwork. Our core team is made up of experts in
                  corporate housing and property management. Together, we work
                  closely to ensure our clients receive the best service
                  possible. Our full-time employees are experienced, reliable,
                  and certified. Plus, we are licensed, bonded, and insured for
                  added peace of mind.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6 className="section-title text-start text-primary text-uppercase mb-3">
                Contact
              </h6>
              {footerContact.map((val, index) => (
                <p className="mb-2" key={index}>
                  {val.icon} {val.name}
                </p>
              ))}
            </div>

            <div className="col-lg-3 col-md-12">
              <div className="row gy-3">
                {footerItem.map((section, sectionIndex) => (
                  <div className="col-md" key={sectionIndex}>
                    <h6 className="section-title text-start text-primary text-uppercase mb-3">
                      {section.header}
                    </h6>
                    {section.UnitItem.map((item, itemIndex) => (
                      <a
                        className="btn btn-link"
                        href={item.link}
                        key={itemIndex}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-2 col-md-12">
              <h6 className="section-title text-start text-primary text-uppercase mb-3">
                We are social!
              </h6>
              <div className="d-flex justify-content-start">
                {socialIcons.slice(0, 4).map((val, index) => (
                  <a
                    key={index}
                    className="btn btn-outline-light btn-social me-2"
                    href={val.link} // Ensure you provide the actual link here
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {val.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="row text-center mt-4">
            <div className="col">
              <p className="mb-2">
                Copyright &copy; {year} OH MY PLACE!. All rights reserved.
              </p>
              <p className="mb-0" style={{ fontSize: "0.875rem" }}>
                Developed by{" "}
                <a
                  href="https://www.linkedin.com/in/himanshud959/"
                  className="text-primary"
                >
                  Himanshu Dubey
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

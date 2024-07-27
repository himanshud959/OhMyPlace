import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navList } from "../data/Data";
// import SocialIcons from "./SocialIcons";
// import LoginSignUp from "./LoginSignUp";

export default function Header() {
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (itemId) => {
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <div className="container-fluid bg-dark px-0 fixed-header">
        <div className="row gx-0">
          <div className="col-lg-3 bg-dark d-none d-lg-block">
            <Link
              to="/"
              className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
            >
              <img src="../assets/img/OhMyPlace.png" alt="Company Logo" className="img-fluid" />
            </Link>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
              <Link to="/" className="navbar-brand d-block d-lg-none">
                <img src="../assets/img/OhMyPlace.png" alt="Company Logo" className="img-fluid" />
              </Link>
              <button
                type="button"
                className="navbar-toggler"
                onClick={() => setNavbarCollapse(!navbarCollapse)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={
                  navbarCollapse
                    ? "navbar-collapse justify-content-center"
                    : "collapse navbar-collapse justify-content-center"
                }
              >
                <div className="navbar-nav py-0 d-flex justify-content-center w-100">
                  {navList.map((item, index) => (
                    <div key={index}>
                      {item.subItems ? (
                        <div
                          className="nav-item dropdown"
                          onMouseEnter={() => handleMouseEnter(item.id)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link className="nav-link dropdown-toggle">
                            {item.text}
                          </Link>
                          <div
                            className={`dropdown-menu rounded-0 m-0 ${
                              activeDropdown === item.id ? "show" : ""
                            }`}
                          >
                            {item.subItems.map((sub) => (
                              <Link to={sub.path} className="dropdown-item" key={sub.text}>
                                {sub.text}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link to={item.path} className="nav-item nav-link" key={item.text}>
                          {item.text}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </nav>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-content-end">
            <Link to="/login" className="btn btn-primary mx-2">
              Login
            </Link>
            <Link to="/signup" className="btn btn-success mx-2">
              Sign Up
            </Link>
            {/* <SocialIcons /> */}
            {/* <LoginSignUp /> */}
          </div>
        </div>
      </div>
      <a
        href="https://wa.me/+918800118508" 
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="../assets/img/WhatsApp.png" alt="WhatsApp" />
      </a>
    </>
  );
}

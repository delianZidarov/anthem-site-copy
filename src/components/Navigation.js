import React from "react";
import "./css/Navigation.css";
function Navigation() {
  return (
    <div className="d-flex flex-column">
      <div className="alert alert-primary m-0 p-0 alert-dismissible fade show d-flex justify-content-end app-alert order-2 order-md-1" role="alert">
        <span className="m-auto p-2 text-center">USE THE JOE COFFEE APP TO ORFER YOUR BEVERAGES FOR CURBSIDE DELIVERY OR PICK UP.</span>
        <span>
          <a className="btn app-alert-btn" data-bs-dismiss="alert" aria-label="Close">
            &times;
          </a>
        </span>
      </div>
      <nav className="navbar navbar-expand-md  navbar-light p-0 order-1 order-md-2">
        <div className="container-fluid navbar-spacing">
          <a href="/" className="navbar-brand">
            <img src="/images/anthem-logo.png" alt="logo" className="navbar-logo" />
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item text-nowrap">
                <a href="#" className="nav-link">
                  HOME
                </a>
              </li>
              <li className="nav-item text-nowrap">
                <a href="#" className="nav-link">
                  LOCATIONS
                </a>
              </li>
              <li className="nav-item text-nowrap">
                <a href="#" className="nav-link">
                  ORDER ONLINE
                </a>
              </li>
              <li className="nav-item text-nowrap">
                <a href="#" className="nav-link">
                  JOIN OUR TEAM
                </a>
              </li>
              <li className="nav-item text-nowrap">
                <a href="#" className="nav-link">
                  COFFEE SCHOOL
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

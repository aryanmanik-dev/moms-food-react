import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MOMS-Foods
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/comming-soon">
                  Office Lunch
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/comming-soon">
                  Catering
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/comming-soon">
                  Cusines
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/comming-soon">
                  Our Plans
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link
                className="nav-link text-white"
                aria-current="page"
                to="/register"
              >
                Register
              </Link>
              <Link className="nav-link text-white" to="/login">
                Login
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

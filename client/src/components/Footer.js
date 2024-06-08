import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div style={{ height: "10vh" }}>
      <nav className="fixed-bottom navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container-fluid text-center">
          <Link className="navbar-brand " to="/">
            MOM-FOODS
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Footer;

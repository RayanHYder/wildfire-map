import React from "react";
import { Link } from "../../../react-router-dom";

import { ReactComponent as Logo } from "../../img/logo-alt.svg";

import "./navbar.style.scss";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1">
        <Logo className="logo" />
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/">Home</Link>
          <Link to="/findwildfires">Find Wildfires</Link>
          <Link to="/information">Information</Link>
          <Link to="/news">News</Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;

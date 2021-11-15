import React from "react";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as Logo } from "./img/logo-alt.svg";
import "./navigation.style.css";
function Navigation(props) {
  return (
    <div className="navigation">
      <Logo className="navlogo" />
      <Link to="/">Home</Link>
      <div class="divider" />
      <Link to="/findwildfires">Find Wildfires</Link>
      <div class="divider" />
      <Link to="/information">Information</Link>
      <div class="divider" />
      <Link to="/news">News</Link>
      <div class="divider" />
    </div>
  );
}

export default withRouter(Navigation);

import React, { useEffect, useState } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../img/logo-alt.png";
import "./navbar.css";

const Navigation = () => {
  //Used to show the dropdown when hovering over it
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <div className="navsize">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <div className="brand">
            {/* NAVBAR LOGO WITH CLICKABLE LINK TO HOME */}
            <a href="/">
              <img src={Logo} className="logo" alt="" />
            </a>
            {/* TITLE WITH LINK TO HOME */}
            <Navbar.Brand className="title" href="/">
              <div className="navHover">Wildfire Watchers</div>
            </Navbar.Brand>
            {/* DESCRIPTION  */}
            <div className="description">
              Bringing you the latest updates on California's climate!
            </div>
          </div>
          {/* BOOTSTRAP TO MAKE NAVBAR RESPONSIVE */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* BOOTSTRAP TO MAKE NAVBAR RESPONSIVE */}
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* NAVBAR ITEMS  */}
            <ul class="navbar-nav ml-auto">
              <div className="nav">
                <Nav className="me-auto">
                  <NavDropdown
                    // className="navItems"
                    title={<span className="navItems">Home</span>}
                    id="collasible-nav-dropdown"
                    // MAKE ""HOME" A CLICKABLE LINK
                    onClick={(event) => (window.location.href = "/")}
                    // DETECT IF MOUSE HOVERS OVER "HOME" AND SHOW DROPDOWN if true
                    show={show}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                  >
                    {/* DROPDOWN HOME MENU ITEMS: "OUR MISSION" PAGE */}
                    <NavDropdown.Item className="navDrop" href="/mission">
                      <span className="navDropItem">Our Mission</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                  {/* ALL OTHER NAV BAR ITEMS */}
                  {/* NAVBAR ITEM: FIND WILDFIRES PAGE */}
                  <Nav.Link href="/findwildfires">
                    <div className="navItems">Find Wildfires</div>
                  </Nav.Link>
                  {/* NAVBAR ITEM: FIND INFORMATION PAGE */}
                  <Nav.Link href="/information">
                    <div className="navItems">Information</div>
                  </Nav.Link>
                  {/* NAVBAR ITEM: FIND NEWS PAGE */}
                  <Nav.Link href="/news">
                    <div className="navItems">News</div>
                  </Nav.Link>
                </Nav>
              </div>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

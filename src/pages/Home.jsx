import React from "react";
import { Link } from "react-router-dom";
import { NavSidebar } from "./NavSideBar";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Container from "react-bootstrap/Container";

function Home() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs lg="4">
            <div className="sidenav">
              <NavSidebar />
            </div>
          </Col>
          <Col md="auto">
            <div className="home" align="center">
              <h1>Wildfire Watchers</h1>
              <h5>Latest info and forecast of local & world-wide wildfire</h5>
            </div>
            <div>
              {/* FOR FIND_WILDFIRES */}
              {/* TEMP */}
              {/* going to add a small section to display a preview for FIND WILDFIRES page */}
              <h5>
                View map of wildfires: <Link to="/"> Click here </Link>
              </h5>
            </div>
            <div>
              {/* FOR  INFORMATION */}
              {/* TEMP */}
              {/* going to add a small section to display a preview for INFORMATION page */}
              <h5>
                View current wildfire information:{" "}
                <Link to="/"> Click here </Link>
              </h5>
            </div>

            <div>
              {/* FOR  NEWS */}
              {/* TEMP */}
              {/* going to add a small section to display a preview for NEWS page */}
              <h5>
                View news about wildfires: <Link to="/"> Click here </Link>
              </h5>
            </div>
          </Col>
        </Row>
        <Row xs={1} md={2}>
          <Col>
            {" "}
            <div className="tweets">
              {/* FOR  TWITTER FEED */}
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="Lacfirealerts"
                options={{ height: 400 }}
              />
            </div>
          </Col>
          <Col>
            {" "}
            <div className="tweets">
              {/* FOR  TWITTER FEED */}
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="LACOFD"
                options={{ height: 400 }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Home;

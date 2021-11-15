import React from "react";
import "../styles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Information() {
  return (
    <div className="information" align="center">
      <h1 align="center">Information</h1>
      <p align="center">
        <i>Wildfire Facts, Graphs, and Info</i>
      </p>
      <Row xs={1} md={2}>
        <Col>
          <h3>United States Rain/Precipitation Forecast</h3>
          <div className="embed-container">
            <iframe
              width="500"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              title="United States Precipitation Forecast"
              src="//www.arcgis.com/apps/Embed/index.html?webmap=4f162dedc7e44df49544d0ac8bacfc85&extent=-125.1742,28.997,-87.9964,45.1188&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
            ></iframe>
          </div>
        </Col>
        <Col>
          <h3>Heat Severity in U.S. Cities</h3>
          <div className="embed-container">
            <iframe
              width="500"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              title="heat severity"
              src="//www.arcgis.com/apps/Embed/index.html?webmap=529270e4db1f4c6dbae72b4ffcf97903&extent=-118.2876,33.6875,-116.8498,34.3432&zoom=true&previewImage=false&scale=true&legend=true&disable_scroll=true&theme=light"
            ></iframe>
          </div>
        </Col>
        <Col>
          <h3>Recent Conditions in Air Quality (PM2.5)</h3>
          <div className="embed-container">
            <iframe
              width="500"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              title="air quality"
              src="//www.arcgis.com/apps/Embed/index.html?webmap=a27da94f1bda4c20979471e0e944edbd&extent=-132.9885,19.1599,-40.967,57.2399&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&legend=true&disable_scroll=true&theme=light"
            ></iframe>
          </div>
        </Col>
        <Col>
          <h3>Surface Wind Speed</h3>
          <div className="embed-container">
            <iframe
              width="500"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              title="wind-Copy"
              src="//www.arcgis.com/apps/Embed/index.html?webmap=196240518b3f46babfdc4ec5c85e98f6&extent=-135.7098,26.3907,-89.699,44.8082&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&legend=true&disable_scroll=true&theme=light"
            ></iframe>
          </div>
        </Col>
        <div class="col-sm-6 mx-auto">
          <Col>
            <h3>Temperature</h3>
            <div className="embed-container">
              <iframe
                width="500"
                height="400"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                title="US Heat"
                src="//www.arcgis.com/apps/Embed/index.html?webmap=dd263472bdcc47f7a1e2cdafad741644&extent=-131.4983,21.5361,-57.1428,54.4708&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&details=true&legend=true&active_panel=details&disable_scroll=true&theme=light"
              ></iframe>
            </div>
          </Col>
        </div>
      </Row>
    </div>
  );
}
export default Information;

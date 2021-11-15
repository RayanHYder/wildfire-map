import React from "react";
import "../styles.css";
function FindWildfires() {
  return (
    <div className="findwildfires" align="center">
      <h1>Current wildfires nearby</h1>
      <div className="embed-container">
        <iframe
          width="500"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          title="current wildfires"
          src="//www.arcgis.com/apps/Embed/index.html?webmap=6a00e0fb4b72401d856ef8a3c49b686a&extent=-123.9177,16.3968,-80.9392,56.2267&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&legend=true&disable_scroll=true&theme=light"
        ></iframe>
      </div>
      <div>
        <h5>Powered by ArcGIS</h5>
      </div>
    </div>
  );
}
export default FindWildfires;

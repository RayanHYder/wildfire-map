import React from "react";
import { NavSidebar } from "./NavSideBar";

function Home() {
  return (
    <div>
      <div className="home" align="center">
        <h1>Wildfire Watchers</h1>
        <h5>Latest info and forecast of local & world-wide wildfire</h5>
        <div className="sidenav">
          <NavSidebar />
        </div>
        <div></div>
        {/* FOR FIND_WILDFIRES */}
        {/* going to add a small section to display a preview for FIND WILDFIRES page */}
        <div></div>

        <div>
          {/* FOR  INFORMATION */}
          {/* going to add a small section to display a preview for INFORMATION page */}
        </div>
        {/* going to add a small section to display a preview for NEWS PAGE */}
        <div></div>
        {/* NEED TO FORMAT ALL THE PAGES SO THEY LOOK GOOD ON MOBILE */}
      </div>
    </div>
  );
}
export default Home;

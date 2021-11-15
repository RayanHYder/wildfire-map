import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faNewspaper,
  faWarehouse
} from "@fortawesome/free-solid-svg-icons";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faBinoculars } from "@fortawesome/free-solid-svg-icons";

import React from "react";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export const NavSidebar = () => {
  const history = useHistory();
  const location = useLocation();
  return (
    <React.Fragment>
      <div>
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              title: "Home",
              itemId: "/home",
              elemBefore: () => <FontAwesomeIcon icon={faWarehouse} />
            },
            {
              title: "Mission",
              itemId: "mission",
              elemBefore: () => <FontAwesomeIcon icon={faSuitcase} />
            },
            {
              title: "Find Wildfires",
              itemId: "/FindWildfires",
              elemBefore: () => <FontAwesomeIcon icon={faBinoculars} />
            },
            {
              title: "Information",
              itemId: "/information",
              elemBefore: () => <FontAwesomeIcon icon={faInfo} />
            },
            {
              title: "News",
              itemId: "/news",
              elemBefore: () => <FontAwesomeIcon icon={faNewspaper} />
            }
          ]}
        />
      </div>
    </React.Fragment>
  );
};

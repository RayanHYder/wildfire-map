import React from "react";

function News() {
  return (
    <div className="news" align="center">
      <h1 id="space">Hidden</h1> <h1>News</h1>
      <h5>
        We bring world wide news regarding wildfire to the hands of all viewers.
      </h5>
      <article id="primary-content" className="cardOne">
        <figure>
          <a
            href="https://www.sacbee.com/news/california/fires/article254710827.html#storylink=mainstage_lead"
            title="Sequoia fires update: There are new Fresno County evacuation warnings due to KNP Complex"
            className="image-link-macro kfocusable"
          >
            <img
              src="https://www.fresnobee.com/latest-news/wjoexr/picture254684552/alternates/LANDSCAPE_768/FRS_EPZ_WILDFIRES_FRESNO_10%20(6)"
              alt="Sequoia fires update: There are new Fresno County evacuation warnings due to KNP Complex"
              loading="lazy"
            ></img>
          </a>
        </figure>
        <div id="" className="package">
          <h2 className="caps kicker-id h6">
            <a
              href="https://www.sacbee.com/news/california/fires/"
              className="kicker"
            >
              Fires
            </a>
          </h2>
          <h3 className="h1">
            <a href="https://www.sacbee.com/news/california/fires/article254710827.html#storylink=mainstage_lead">
              Sequoia fires update: There are new Fresno County evacuation
              warnings due to KNP Complex
            </a>
          </h3>
          <summary>
            Hot and dry conditions continue to fuel the KNP Complex and Windy
            Fire.
          </summary>
          <div
            data-originaldate="1633208053"
            dateTime="1633208053"
            className="time"
          >
            October 2, 2021 1:54 PM
          </div>
        </div>
      </article>
      <article id="secondary-story-2" className="cardTwo">
        <figure>
          <a
            href="https://www.sacbee.com/news/california/fires/article254710137.html#storylink=mainstage_card"
            title="Smoky air from fires persists in Valley, Sierra. Here’s how bad it is this weekend"
            className="image-link-macro kfocusable"
          >
            <img
              src="https://www.fresnobee.com/latest-news/e2tt66/picture254441653/alternates/LANDSCAPE_768/FRS_KNPfire3"
              alt="Smoky air from fires persists in Valley, Sierra. Here’s how bad it is this weekend"
              loading="lazy"
            ></img>
          </a>
        </figure>
        <div id="" className="package">
          <h2 className="caps kicker-id h6">
            <a
              href="https://www.sacbee.com/news/california/fires/"
              className="kicker"
            >
              Fires
            </a>
          </h2>
          <h3>
            <a href="https://www.sacbee.com/news/california/fires/article254710137.html#storylink=mainstage_card">
              Smoky air from fires persists in Valley, Sierra. Here’s how bad it
              is this weekend
            </a>
          </h3>
          <div
            data-originaldate="1633206829"
            dateTime="1633206829"
            className="time update-date"
          >
            Updated October 2, 2021 1:33 PM
          </div>
        </div>
      </article>
    </div>
  );
}
export default News;

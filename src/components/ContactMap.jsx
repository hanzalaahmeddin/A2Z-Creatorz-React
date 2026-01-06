import React from "react";
import "./ContactMap.css";
const locations = [
  {
    country: "Pakistan",
    email: "info@a2zcreatorz.com",
    top: "52%",
    left: "62%",
  },
  {
    country: "Canada",
    email: "info@a2zcreatorz.ca",
    top: "32%",
    left: "28%",
  },
  {
    country: "UAE",
    email: "info@a2zcreatorz.ae",
    top: "46%",
    left: "58%",
  },
  {
    country: "UK",
    email: "info@a2zcreatorz.co.uk",
    top: "28%",
    left: "48%",
  },
];

const ContactMap = () => {
  return (
    <div className="contact-map-wrapper">
      <img src="src/assets/images/contact-map.png" alt="Global Offices Map" />

      {locations.map((loc, index) => (
        <div
          key={index}
          className="map-hotspot"
          style={{ top: loc.top, left: loc.left }}
        >
          <span className="pulse"></span>

          <div className="map-tooltip">
            <strong>{loc.country}</strong>
            <p>{loc.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactMap;

import React from "react";
import "./ContactMap.css";

import contactMapImg from '../assets/images/contact-map.png';
const locations = [
  {
    country: "Pakistan",
    email: "info@a2zcreatorz.com",
    phone: "+92-21-35385205 (07)",
    top: "55%",
    left: "57%",
  },
  {
    country: "Canada",
    email: "info@a2zcreatorz.ca",
    phone: "+92-21-35385205 (07)",
    top: "32%",
    left: "28%",
  },
  {
    country: "United Arab Emirates",
    email: "info@a2zcreatorz.ae",
    phone: "+971 50 1304251",
    top: "54%",
    left: "50%",
  },
  {
    country: "UK",
    email: "info@a2zcreatorz.co.uk",
    phone: "+92-21-35385205 (07)",
    top: "28%",
    left: "48%",
  },
];

const ContactMap = () => {
  return (
    <div className="contact-map-wrapper">
      <img src={contactMapImg} alt="Global Offices Map" />

      {locations.map((loc, index) => (
        <div
          key={index}
          className="map-hotspot"
          style={{ top: loc.top, left: loc.left }}
        >
          <span className="pulse"></span>

          <div className="map-tooltip">
            <strong className="mb-1">{loc.country}</strong>
            <p className="mb-0">{loc.email}</p>
            <p className="mb-0">{loc.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactMap;

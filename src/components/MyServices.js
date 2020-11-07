import React from "react";
import "./styles/myServices.css";

export const MyService = () => {
  return (
    <div id="services" className="myServicesWrapper container2">
      <header className="centered sectionHeader">
        <h1>
          My <span className="accent">Services</span>
          <span className="primary">.</span>
        </h1>
      </header>
      <div className="servicesWrapper">
        <div className="serviceCard">
          <div className="centered">
            <div className="serviceIconBg centered"></div>
          </div>
          <h3>Web Development</h3>
          <p>
            reprehenderit voluptates illo accusamus deleniti in aperiam
            laboriosam quas nostrum. Ratione similique est quas rerum nam.
          </p>
        </div>
        <div className="serviceCard">
          <div className="centered">
            <div className="serviceIconBg centered"></div>
          </div>
          <h3>UI-UX Designs</h3>
          <p>
            reprehenderit voluptates illo accusamus deleniti in aperiam
            laboriosam quas nostrum. Ratione similique est quas rerum nam.
          </p>
        </div>
        <div className="serviceCard">
          <div className="centered">
            <div className="serviceIconBg centered"></div>
          </div>
          <h3>Backend Development</h3>
          <p>
            reprehenderit voluptates illo accusamus deleniti in aperiam
            laboriosam quas nostrum. Ratione similique est quas rerum nam.
          </p>
        </div>
      </div>
    </div>
  );
};

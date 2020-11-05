import React from "react";
import "./styles/contact.css";

const QuickContact = () => {
  return (
    <div className="quickContact container">
      <div className="contactCard">
        <div className="centered">
          <div className="flex">
            <div className="centered">
              <div className="contactIconBg"></div>
            </div>
            <div>
              <h3>Address</h3>
              <p>156, Dev Street, Blog Mansion, 721 Pluto Planet, 5th Galaxy</p>
            </div>
          </div>
        </div>
      </div>
      <a href="callto:" className="contactCard">
        <div className="centered">
          <div className="flex">
            <div className="centered">
              <div className="contactIconBg"></div>
            </div>
            <div>
              <h3>Phone</h3>
              <p>+234-023-232-2323</p>
            </div>
          </div>
        </div>
      </a>
      <a href="mailto:oriolaemmanuel199@gmail.com" className="contactCard">
        <div className="centered">
          <div className="flex">
            <div className="centered">
              <div className="contactIconBg"></div>
            </div>
            <div>
              <h3>Email</h3>
              <p>oriolaemmanuel199@gmail.com</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const ContactFrom = () => {
  return (
    <div className="container contactFormWrapper">
      <div>
        <div className="inputContainer">
          <input placeholder="Full Name..." type="text"></input>
        </div>
        <div className="inputContainer">
          <input placeholder="Email..." type="email"></input>
        </div>
        <div className="inputContainer">
          <input placeholder="Subject..." type="text"></input>
        </div>
        <div className="inputContainer">
          <textarea placeholder="Subject..." type="text"></textarea>
        </div>
        <button className="contactActionBtn">Send Message</button>
      </div>
      <div className="backgroundFix contactBg"></div>
    </div>
  );
};

export const Contact = () => {
  return (
    <div className="contactWrapper container">
      <header className="sectionHeader">
        <h1 className="accent">
          Contact <span style={{ color: "#fff" }}>Me</span>
          <span className="primary">.</span>
        </h1>
      </header>
      <div>
        <QuickContact />
        <ContactFrom />
      </div>
    </div>
  );
};

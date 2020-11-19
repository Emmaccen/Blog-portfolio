import React from "react";
import "./styles/footer.css";
import { scrollToView } from "../sharedFunctions/scrollToView";

export const Footer = () => {
  return (
    <footer className="footerWrapper">
      <div className="container">
        <div className="centered">
          <p>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
        <div className="centered footerIcons">
          <i className="fa fa-2x fa-twitter"></i>
          <i className="fa fa-2x fa-github"></i>
          <i className="fa fa-2x fa-linkedin"></i>
        </div>
        <div className="centered footerLinks">
          <p onClick={() => scrollToView("home")}>Home</p>
          <p onClick={() => scrollToView("portfolio")}>Portfolio</p>
          <p onClick={() => scrollToView("about")}>About</p>
        </div>
      </div>
    </footer>
  );
};

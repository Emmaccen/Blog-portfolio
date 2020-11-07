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
          <i>Icon 1</i>
          <i>Icon 2</i>
          <i>Icon 3</i>
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

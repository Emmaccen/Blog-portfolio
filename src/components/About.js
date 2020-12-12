import React from "react";
import "./styles/about.css";
import { scrollToView } from "../sharedFunctions/scrollToView";

export const About = () => {
  return (
    <div id="about" className="aboutSection container">
      <div className="centered">
        <div>
          <header>
            <h1>
              About <span className="accent">Me</span>
              <span className="primary">.</span>
            </h1>
          </header>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              molestiae suscipit iusto voluptas exercitationem eius esse illum
              corporis, officiis dolorum veritatis, ullam laboriosam
            </p>
            <p className="paraFade">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              molestiae suscipit iusto voluptas exercitationem eius esse illum
              corporis, officiis dolorum veritatis, ullam laboriosam
            </p>
            <div className="aboutBtns">
              <button>Download CV</button>
              <button onClick={() => scrollToView("contact")}>
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="backgroundFix aboutMeImg darken"></div>
    </div>
  );
};

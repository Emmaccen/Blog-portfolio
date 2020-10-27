import React from "react";
import Nav from "./Nav";
import "./styles/home.css";

const Landing = () => {
  return (
    <div className="homePageWrapper backgroundFix darken">
      <Nav />
      <div className="jumbotron">
        <div>
          <h2>Howdy, I Am</h2>
          <h1>Micheal Jackson</h1>
          <p>Freelance Web Developer Based In NY City</p>
          <div className="jumbotronBtns">
            <button>Portfolio</button>
            <button>Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

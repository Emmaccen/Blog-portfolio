import React from "react";
import "./styles/portfolio.css";
import { projectsData } from "../Data/projectsData";

export const Portfolio = () => {
  const loadAllProjects = projectsData.map(({ name, desc, url, image }) => {
    return (
      <div key={name} className="projectContainer portfolio">
        <div
          className="backgroundFix background"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="overlay centered">
          <div>
            <h3>{name}</h3>
            <p>{desc}</p>
            <a href={url}>Explore</a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div id="portfolio" className="portfolioWrapper">
      <header className="centered sectionHeader">
        <div>
          <h1>
            My <span className="accent">Portfolio</span>
            <span className="primary">.</span>
          </h1>
          <h3>
            Explore Some Of My <span className="accent">Awesome</span> Projects
          </h3>
        </div>
      </header>

      <div className="portfolioProjectWrapper">{loadAllProjects}</div>
    </div>
  );
};

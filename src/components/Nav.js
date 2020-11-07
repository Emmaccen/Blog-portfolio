import React from "react";
import { scrollToView } from "../sharedFunctions/scrollToView";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navWrapper centered">
        <div className="navContainer">
          <div>
            <ul>
              <li onClick={() => scrollToView("home")}>Home</li>
              <li onClick={() => scrollToView("about")}>About</li>
              <li onClick={() => scrollToView("portfolio")}>Portfolio</li>
            </ul>
          </div>
          <div>
            <div className="logo">M</div>
          </div>
          <div>
            <ul>
              <li onClick={() => scrollToView("services")}>Services</li>
              <li onClick={() => scrollToView("blogs")}>Blogs</li>
              <li onClick={() => scrollToView("contact")}>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;

import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navWrapper centered">
        <div className="navContainer">
          <div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
            </ul>
          </div>
          <div>
            <div className="logo">M</div>
          </div>
          <div>
            <ul>
              <li>Services</li>
              <li>Blogs</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;

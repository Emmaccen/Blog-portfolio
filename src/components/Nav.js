import React from "react";
import { scrollToView } from "../sharedFunctions/scrollToView";

const closeMenu = () => {
  document.getElementById("phoneMenu").classList.toggle("slider");
};

const MobileNav = () => {
  return (
    <nav>
      <div className="menuController">
        <div className="flex-justify-sb container">
          <div onClick={() => window.location.reload()} className="logo">
            M
          </div>
          <div onClick={() => closeMenu()} className="menuIcon">
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
      </div>
      <div id="phoneMenu" className="menuDrawer centered">
        <h1 onClick={() => closeMenu()} id="closeMenu">
          X
        </h1>
        <ul>
          <li onClick={() => scrollToView("home")}>Home</li>
          <li onClick={() => scrollToView("about")}>About</li>
          <li onClick={() => scrollToView("portfolio")}>Portfolio</li>
          <li onClick={() => scrollToView("services")}>Services</li>
          <li onClick={() => scrollToView("blogs")}>Blogs</li>
          <li onClick={() => scrollToView("contact")}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

class Nav extends React.Component {
  render() {
    return (
      <>
        <MobileNav />
        <nav className="destopNavWrapper centered">
          <div className="navContainer">
            <div>
              <ul>
                <li onClick={() => scrollToView("home")}>Home</li>
                <li onClick={() => scrollToView("about")}>About</li>
                <li onClick={() => scrollToView("portfolio")}>Portfolio</li>
              </ul>
            </div>
            <div>
              <div onClick={() => window.location.reload()} className="logo">
                M
              </div>
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
      </>
    );
  }
}

export default Nav;

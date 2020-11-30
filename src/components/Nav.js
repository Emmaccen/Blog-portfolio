import React from "react";
import { scrollToView } from "../sharedFunctions/scrollToView";

const closeMenu = () => {
  document.getElementById("g").style.width = "0%";
};

const MobileNav = () => {
  return (
    <nav>
      <div className="menuController">
        <div className="flex-justify-sb menuController container">
          <div className="logo">M</div>
          <span className="fa fa-x2 fa-list">menu</span>
        </div>
      </div>
      <div className="menuDrawer centered">
        <h1 onClick={() => closeMenu()} id="closeMenu">
          X
        </h1>
        <ul id="g">
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
      <MobileNav />
      // <nav className="navWrapper centered">
      //   <div className="navContainer">
      //     <div>
      //       <ul>
      //         <li onClick={() => scrollToView("home")}>Home</li>
      //         <li onClick={() => scrollToView("about")}>About</li>
      //         <li onClick={() => scrollToView("portfolio")}>Portfolio</li>
      //       </ul>
      //     </div>
      //     <div>
      //       <div className="logo">M</div>
      //     </div>
      //     <div>
      //       <ul>
      //         <li onClick={() => scrollToView("services")}>Services</li>
      //         <li onClick={() => scrollToView("blogs")}>Blogs</li>
      //         <li onClick={() => scrollToView("contact")}>Contact</li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
    );
  }
}

export default Nav;

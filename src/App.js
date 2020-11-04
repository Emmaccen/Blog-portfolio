import React from "react";
import Landing from "./components/Landing";
import "./components/styles/global.css";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { MyService } from "./components/MyServices";
import { Blogs } from "./components/Blogs";
import { Contact } from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Portfolio />
      <MyService />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;

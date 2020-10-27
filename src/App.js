import React from "react";
import Landing from "./components/Landing";
import "./components/styles/global.css";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { MyService } from "./components/MyServices";
function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Portfolio />
      <MyService />
    </div>
  );
}

export default App;

import React from 'react';
import Landing from './components/Landing';
import './components/styles/global.css'
import {About} from './components/About'
function App() {
  return (
    <div className="App">
      <Landing />
      <About />
    </div>
  );
}

export default App;

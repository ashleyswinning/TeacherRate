import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import Professors from './components/Professor/Professors.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="mt-5">
          <Professors />
        </div>
      </div>
    );
  }
}

export default App;

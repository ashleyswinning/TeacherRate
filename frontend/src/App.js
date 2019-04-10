import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import Professors from './components/Professor/Professors';
import './App.css';
import { contract } from "./setup.js"

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      teachers : []
    }
  }

  render() {
    //console.log(this.state.teachers);
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

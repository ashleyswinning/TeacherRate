import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import Professors from './components/Professor/Professors.js';
import './App.css';

import { drizzleConnect } from "drizzle-react";

class App extends Component {

  render() {
    const { drizzleStatus, accounts } = this.props;
    if (drizzleStatus.initialized) {
      return (
        <div className="App">
          <NavBar/>
          <div className="mt-5">
            <Professors />
          </div>
        </div>
    );
    }
    return <div>Loading dapp...</div>;
  }
}
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    TeacherRate: state.contracts.TeacherRate
  };
};

const AppContainer = drizzleConnect(App, mapStateToProps);
export default AppContainer;
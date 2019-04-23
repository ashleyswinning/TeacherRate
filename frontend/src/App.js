import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import Professors from './components/Professor/Professors.js';
import './App.css';

import { drizzleConnect } from "drizzle-react";

class App extends Component {
  state = { loading: true, drizzleState: null };

  // this function is from https://truffleframework.com/tutorials/getting-started-with-drizzle-and-react
  componentDidMount() {
    const { drizzle } = this.props;

    // subscribe to changes in the store
    this.unsubscribe = drizzle.store.subscribe(() => {

      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();

      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    if (this.state.loading) {
      return <div>Loading dapp...</div>;
    }
    return (
      <div className="App">
        <NavBar/>
        <div className="mt-5">
          <Professors         
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
          drizzleStore = {this.props.drizzleStore}/>
        </div>
      </div>
  );
  }
}
/*const mapStateToProps = state => {
  return {
    drizzleStatus: state.drizzleStatus,
    TeacherRate: state.contracts.TeacherRate
  };
};*/

const AppContainer = drizzleConnect(App);
export default AppContainer;
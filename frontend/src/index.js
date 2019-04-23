import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Drizzle, generateStore } from "drizzle";
import { DrizzleProvider } from 'drizzle-react';
// Import contract
import TeacherRate from "./contracts/TeacherRate.json";

console.log(TeacherRate);

// let drizzle know what contracts we want and how to access our test blockchain
const options = {
  contracts: [TeacherRate],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:7545",
    },
  },
};

// setup drizzle
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

ReactDOM.render(
  <DrizzleProvider options={options}>
    <App drizzle={drizzle}
    drizzleStore={drizzleStore} />
  </DrizzleProvider>,
  document.getElementById("root")
);

//ReactDOM.render(<App drizzle={drizzle} />, document.getElementById('root'));
serviceWorker.register();

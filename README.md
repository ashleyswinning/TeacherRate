# TeacherRate
Cameron Smith, Austin Tyler, Quantonio Nunnally, Jacen Duran, Ashley Huynh

# How to Run Programs:

## Prerequisites:
* ###### Make sure you are in the `TeacherRate` directory.

* ###### Make sure you have Truffle version Truffle v5.0.9 (core: 5.0.9), Solidity version v0.5.0 (solc-js), Web3 version v1.0.0-beta.37, Node version v11.10.1. To check this, run `truffle version`

* ###### If you don't, then run `sudo npm install -g truffle`, which requires the npm package. In order to do this, you may need to install Node, which is available via homebrew on Mac. For more information please check out the following link: https://changelog.com/posts/install-node-js-with-homebrew-on-os-x 

* ###### Make sure you have `drizzle` installed. To do this, run `yarn add redux drizzle drizzle-react drizzle-react-components`. If you do not have `yarn`, run `npm i yarn`.

* ###### Make sure you have MetaMask installed. If you do not have MetaMask, installation instructions are available here (https://blog.wetrust.io/how-to-install-and-use-metamask-7210720ca047?gi=e44b73bfc053).

## Instructions:
* Open up the Ganache GUI and add a new Workspace.

* For the Workspace, name it `TeacherRate` and import the `truffle-config.js` file from `backend`.

* In another tab, `cd` into `backend` directory and do `truffle compile` then `truffle migrate --reset`
> This deploys the contract onto the Ganache GUI.

* Then, `cd` into `frontend` in another tab and run `npm install` and then `npm start`.

* Make sure MetaMask is installed in your browser (Chrome preferred)
> If you do not have MetaMask, installation instructions are available here (https://blog.wetrust.io/how-to-install-and-use-metamask-7210720ca047?gi=e44b73bfc053).

* Once MetaMask is installed, switch to `http://localhost:7545` network at top of extension. 
> If you don't see it, you can manually add it by selecting `Custom RPC` and then for the URL adding in `http://localhost:7545`. If this work, then check `http://localhost:8545`

* Then, make sure you've added an account via one of the private keys provided by the Ganache GUI.


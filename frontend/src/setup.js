import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
let address = '0x892cb3635950bA409185046e48087B1DF5246c51';
let abi=[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"constant":false,"inputs":[{"name":"_fname","type":"bytes32"},{"name":"_lname","type":"bytes32"}],"name":"_createTeacher","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xde8760d5"},{"constant":false,"inputs":[{"name":"_teacherID","type":"uint8"},{"name":"_rating","type":"uint256"}],"name":"_submitRating","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x959061d0"},{"constant":true,"inputs":[{"name":"_teacherID","type":"uint8"}],"name":"_getTeacherRatings","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x6d53a79e"},{"constant":true,"inputs":[],"name":"_getTeacherIds","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8afc41c1"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"_getTeacherName","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xcb2e1d06"}];
web3.eth.defaultAccount = web3.eth.accounts[0]

const contract = web3.eth.Contract(abi, address);
//console.log(contract.address);
// console.log(contract._getTeacherName(3)); this right here returns an error -- feel free to uncomment to see but it's saying the function isn't recognized

export {contract};

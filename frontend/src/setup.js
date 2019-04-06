import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider("http://loaclhost:8545"));
let abi=[{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"teacherRatings","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xd680cbcb"},{"inputs":[{"name":"teacherEntries","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"constant":true,"inputs":[{"name":"teacher","type":"bytes32"}],"name":"getVotes","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x4c051100"},{"constant":false,"inputs":[{"name":"teacher","type":"bytes32"}],"name":"placeVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x0163ffe3"},{"constant":true,"inputs":[],"name":"getTeachers","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x2d4bf154"}];
web3.eth.defaultAccount = web3.eth.accounts[0]

const contract = web3.eth.Contract(abi);
export {contract};

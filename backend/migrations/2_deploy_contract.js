var TeacherRate = artifacts.require("./TeacherRate.sol");

module.exports = function(deployer) {
	var names = ['Johnny Depp', 'Robin Williams', 'Reese Witherspoon'];
	deployer.deploy(TeacherRate, names.map(x => web3.utils.asciiToHex(x).valueOf()));
};
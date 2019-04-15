var TeacherRate = artifacts.require("./TeacherRate.sol");

module.exports = function(deployer) {
	deployer.deploy(TeacherRate);
};
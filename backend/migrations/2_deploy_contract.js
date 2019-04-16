var TeacherRate = artifacts.require("./TeacherRate.sol");

module.exports = function(deployer) {
	deployer.deploy(TeacherRate)
	.then(() => TeacherRate.deployed())
	.then(function(contract) {
		contract._createTeacher("Ron", "Swanson");
		contract._createTeacher("Robin", "Williams");
		contract._createTeacher("Reese", "Witherspoon");
		contract._createTeacher("Dwight", "Schrute");
		contract._createTeacher("Betty", "White");
	});
};
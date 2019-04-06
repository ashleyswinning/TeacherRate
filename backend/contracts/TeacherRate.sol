pragma solidity ^0.5.0;

contract TeacherRate {

	mapping (bytes32 => uint8) public teacherRatings;

	bytes32[] teachers;

	// include something about student database for ratings page to verify they are students against "student database"

	constructor(bytes32[] memory teacherEntries) public {
		teachers = teacherEntries;
	}

	function getVotes(bytes32 teacher) view public returns (uint8) {
		return teacherRatings[teacher]; 
	}

	function placeVote(bytes32 teacher) public {
		teacherRatings[teacher] += 1;
	}
	
	function getTeachers() view public returns (bytes32[] memory){
		return teachers;
	}
}
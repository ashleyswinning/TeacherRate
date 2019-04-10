pragma solidity ^0.5.0;

contract TeacherRate {

	mapping (bytes32 => uint8) public teacherRatings;

	// bytes32[] teachers;

	struct teacher {
		uint8 id;
		bytes32 name;
		uint8[] teacherRatings;
		string[] teacherReviews;
	}

	teacher[] teachers;


	constructor(bytes32[] memory teacherEntries) public {
		teachers = teacherEntries;
	}

	function _createTeacher (bytes32 _name) public {
		uint8 id = _generateID();
		teachers.push(teacher(id, _name, null, null));
	}

	function _generateID () returns(uint8) internal {
		if(teachers.length < 1){
			return 0;
		}
		else return teachers.length;
	}

	function _submitReview (uint8 _teacherID, uint8 _rating, string _review) public {
		if (_rating < 1 || _rating > 5){ //rating must be between 1 and 5
			throw;
		}
		else {
			teachers[_teacherID].teacherRatings.push(_rating);
			teachers[_teacherID].teacherReviews.push(_review);
		}
	}
	
			

	function _getTeacherRatings(uint8 _teacherID) view public returns (uint8) {
		uint8 avg = 0;
		uint8 len = teachers[_teacherID].teacherRatings.length;
		for(uint i =0; i<len; i++){
			avg += teachers[_teacherID].teacherRatings[i];
		}
		avg = avg / len;
		return avg; 
	}

	function _getTeacherReviews (uint8 _id) returns(string[]) public {
		return teachers[_id].teacherReviews;
	}
	

	// function _placeVote(bytes32 _teacher) public {
	// 	teacherRatings[_teacher] += 1;
	// }
	
	function _getTeachers() view public returns (bytes32[] memory){
		return teachers;
	}
}
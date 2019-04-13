pragma solidity ^0.5.0;

contract TeacherRate {

	// mapping (bytes32 => uint8) public teacherRatings;

	// bytes32[] teachers;

	struct teacher {
		uint256 id;
		bytes32 name;
		uint256[] teacherRatings;
		// string[] teacherReviews;
	}

	teacher[] teachers;


	constructor() public {
		// teachers = teacherEntries;
	}

	function _createTeacher (bytes32 _name) public {
		uint256 _id = _generateID();
		teachers.push(teacher({
			id: _id,
			name: _name,
			teacherRatings: new uint256[](0)
			// teacherReviews: new string[](0)
			})) -1;
	}

	function _generateID () view internal returns(uint256) {
		if(teachers.length < 1){
			return 0;
		}
		else return teachers.length;
	}

//, string memory _review
	function _submitReview (uint8 _teacherID, uint256 _rating) public {
		if (_rating < 1 || _rating > 5){ //rating must be between 1 and 5
			revert();
		}
		else {
			teachers[_teacherID].teacherRatings.push(_rating) -1;
			// teachers[_teacherID].teacherReviews.push(_review) -1;
		}
	}
	
			

	function _getTeacherRatings(uint8 _teacherID) view public returns (uint256) {
		uint256 avg = 0;
		uint256 len = teachers[_teacherID].teacherRatings.length;
		for(uint i =0; i<len; i++){
			avg += teachers[_teacherID].teacherRatings[i];
		}
		avg = avg / len;
		return avg; 
	}

	// function _getTeacherReviews (uint8 _id) view public returns(string[] memory) {
	// 	return teachers[_id].teacherReviews;
	// }
	

	// function _placeVote(bytes32 _teacher) public {
	// 	teacherRatings[_teacher] += 1;
	// }
	
	function _getTeacherIds() view public returns (uint256[] memory){
		uint256[] memory _Ids;
		for(uint i; i < teachers.length; i++){
			_Ids[i] = teachers[i].id;
		}
		return _Ids;
	}
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfessorCard from './ProfessorCard';

class ProfessorList extends Component {

    render() {
        console.log(this.props);

        let professorList = this.props.professors.map((professor) => 
            <ProfessorCard key={professor.id} professor={professor} updateRating={this.props.updateRating}/>
        );

        return (
            <div>
                {professorList}
            </div>
        );
    }
}

ProfessorList.defaultProps = {
    professors: []
};

ProfessorList.propTypes = {
    professors: PropTypes.array
};

export default ProfessorList;
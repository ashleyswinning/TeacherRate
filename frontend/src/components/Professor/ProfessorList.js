import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfessorCard from './ProfessorCard';

class ProfessorList extends Component {

    render() {
        // allows visibility when debugging capturing information regarding props
        console.log(this.props);

        // obtain list of professors and return them as ProfessorCard elements to later populate card view with professors
        // and their respective attributes 
        let professorList = this.props.professors.map((professor) => 
            <ProfessorCard key={professor.id} professor={professor} updateRating={this.props.updateRating}/>
        );

        // return list of professors previously iterated on
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
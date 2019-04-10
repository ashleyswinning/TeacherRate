import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfessorCard from './ProfessorCard';

const getProfessors = (professors) => {
    return (
        <div className="card-deck">
            {
                professors.map(professor => <ProfessorCard key={professor.id} professor={professor} />)
            }
        </div>
    );
};

const ProfessorList = (props) => (
    <div>
        {getProfessors(props.professors)}
    </div>
);

ProfessorList.defaultProps = {
    professors: []
};

ProfessorList.propTypes = {
    professors: PropTypes.array
};

export default ProfessorList;
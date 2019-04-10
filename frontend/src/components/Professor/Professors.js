import React, { Component } from 'react';
import ProfessorList from './ProfessorList';
import ProfessorService from '../../services/ProfessorService';

export default class Professors extends Component{

    constructor(){
        super();

        this.state = {
            professors: []
        };
    }

    componentDidMount() {
        this.setState(() => ({professors: ProfessorService.getProfessors()}));
    }

    render() {
        return (
            <div>
                <ProfessorList professors={this.state.professors} />
            </div>
        );
    }
}
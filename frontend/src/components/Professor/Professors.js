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
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">
                    <div className="col-sm-12">
                        <ProfessorList professors={this.state.professors} />
                    </div>
                </div>
            </div>
        );
    }
}
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ProfessorList from './ProfessorList';


export default class Professors extends Component{


    constructor(props, context){
        super(props);
        this.contracts = context.drizzle.contracts;

        // initialized state that will hold static list of professors with a starting rating of 0
        this.state = {
            professors: [
                {
                    "id": 0,
                    "name": "Ron Swanson",
                    "course": "HIST 1111 Survey of World History",
                    "imageUrl": "../images/ron_swanson.jpg",
                    "rating": 0, // here you would call function to get rating from contract?
                    "votes": 0
                },
                {
                    "id": 1,
                    "name": "Robin Williams",
                    "course": "ENGL 2130 American Literature",
                    "imageUrl": "../images/robin_williams.jpg",
                    "rating": 0, // here you would call function to get rating from contract?
                    "votes": 0
                },
                {
                    "id": 2,
                    "name": "Reese Witherspoon",
                    "course": "ECON 3910 Microeconomics",
                    "imageUrl": "../images/reese_witherspoon.jpg",
                    "rating": 0, // here you would call function to get rating from contract?
                    "votes": 0
                },
                {
                    "id": 3,
                    "name": "Dwight Schrute",
                    "course": "GRMN 4431 German for International Business",
                    "imageUrl": "../images/dwight.jpg",
                    "rating": 0, // here you would call function to get rating from contract?
                    "votes": 0
                },
                {
                    "id": 4,
                    "name": "Betty White",
                    "course": "FILM 2700 History of the Motion Picture",
                    "imageUrl": "../images/betty_white.jpg",
                    "rating": 0, // here you would call function to get rating from contract?
                    "votes": 0
                }
            ]
        };
    }

    // function to be used by grandchild component that will pass a professor id along with a new rating to this component
    updateRating = (id, newRating) => {
        console.log("Id: " + id + ", New Rating: " + newRating);

        // if professor is found by the id, their rating will be updated
        this.state.professors.map((professor) => {
            if(professor.id === id) {
                let newProfessor = Object.assign({}, this.state);
                newProfessor.professors[id].rating = newRating;
                newProfessor.professors[id].votes += 1;
                this.setState({
                    newProfessor
                });

                this.contracts.TeacherRate.methods._submitRating.cacheSend(professor.id, Math.round(newRating)); // the parameters here are not working
            }
        });
    }

    render() {
        // allows visibility when debugging capturing information regarding props
        //console.log(this.state);

        return (
            <div>
                <ProfessorList professors={this.state.professors} updateRating={this.updateRating} />
            </div>
        );
    }
}
Professors.contextTypes = {
    drizzle: PropTypes.object
}
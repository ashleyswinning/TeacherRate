import React, { Component } from 'react';
import ProfessorList from './ProfessorList';
import {contract} from '../../setup';

export default class Professors extends Component{

    constructor(props){
        super(props);

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
                    "rating": 0,
                    "votes": 0
                },
                {
                    "id": 3,
                    "name": "Dwight Schrute",
                    "course": "GRMN 4431 German for International Business",
                    "imageUrl": "../images/dwight.jpg",
                    "rating": 0,
                    "votes": 0
                },
                {
                    "id": 4,
                    "name": "Betty White",
                    "course": "FILM 2700 History of the Motion Picture",
                    "imageUrl": "../images/betty_white.jpg",
                    "rating": 0,
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

                // here is where contract._submitRating(professor.name, professor.newRating); would be called to submit rating
            }
        });
    }

    render() {
        // allows visibility when debugging capturing information regarding props
        console.log(this.state);

        return (
            <div>
                <ProfessorList professors={this.state.professors} updateRating={this.updateRating} />
            </div>
        );
    }
}
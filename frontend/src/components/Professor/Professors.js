import React, { Component } from 'react';
import ProfessorList from './ProfessorList';

export default class Professors extends Component{

    constructor(props){
        super(props);

        this.state = {
            professors: [
                {
                    "id": 0,
                    "name": "Ron Swanson",
                    "course": "HIST 1111 Survey of World History",
                    "imageUrl": "../images/ron_swanson.jpg",
                    "rating": 0
                },
                {
                    "id": 1,
                    "name": "Robin Williams",
                    "course": "ENGL 2130 American Literature",
                    "imageUrl": "../images/robin_williams.jpg",
                    "rating": 0
                },
                {
                    "id": 2,
                    "name": "Reese Witherspoon",
                    "course": "ECON 3910 Microeconomics",
                    "imageUrl": "../images/reese_witherspoon.jpg",
                    "rating": 0
                },
                {
                    "id": 3,
                    "name": "Dwight Schrute",
                    "course": "GRMN 4431 German for International Business",
                    "imageUrl": "../images/dwight.jpg",
                    "rating": 0
                },
                {
                    "id": 4,
                    "name": "Betty White",
                    "course": "FILM 2700 History of the Motion Picture",
                    "imageUrl": "../images/betty_white.jpg",
                    "rating": 0
                }
            ]
        };
    }

    updateRating = (id, newRating) => {
        console.log("Id: " + id + ", New Rating: " + newRating);

        this.state.professors.map((professor) => {
            if(professor.id === id) {
                let newProfessor = Object.assign({}, this.state);
                newProfessor.professors[id].rating = newRating;
                this.setState({
                    newProfessor
                });
            }
        });
    }

    render() {

        console.log(this.state);

        return (
            <div>
                <ProfessorList professors={this.state.professors} updateRating={this.updateRating} />
            </div>
        );
    }
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfessorList from './ProfessorList';
import web3 from 'web3';


export default class Professors extends Component{

    constructor(props, context){
        super(props);
        this.drizzle = this.props.drizzle.contracts.TeacherRate;
        this.contracts = context.drizzle.contracts;

        this.state = {
            professors: [
                {
                    "id": 0,
                    "name": "Ron Swanson",
                    "course": "HIST 1111 Survey of World History",
                    "imageUrl": "../images/ron_swanson.jpg",
                    "rating": 0,// here you would call function to get rating from contract?
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

        this.state.professors.map((professor) => {
            this.drizzle.methods._getTeacherRatings(0).call().then(data =>{
                return data;
            }
            ).then(data => {
                if (professor.id === 0) {
                    professor.rating = parseInt(data);
                    this.setState({
                        rating: parseInt(data)
                    })
                }
            });
            this.drizzle.methods._getTeacherRatings(1).call().then(data =>{
                return data;
            }
            ).then(data => {
                if (professor.id === 1) {
                    professor.rating = parseInt(data);
                    this.setState({
                        rating: parseInt(data)
                    })
                }
            });
            this.drizzle.methods._getTeacherRatings(2).call().then(data =>{
                return data;
            }
            ).then(data => {
                if (professor.id === 2) {
                    professor.rating = parseInt(data);
                    this.setState({
                        rating: parseInt(data)
                    })
                }
            });
            this.drizzle.methods._getTeacherRatings(3).call().then(data =>{
                return data;
            }
            ).then(data => {
                if (professor.id === 3) {
                    professor.rating = parseInt(data);
                    this.setState({
                        rating: parseInt(data)
                    })
                }
            });
            this.drizzle.methods._getTeacherRatings(4).call().then(data =>{
                return data;
            }
            ).then(data => {
                if (professor.id === 4) {
                    professor.rating = parseInt(data);
                    console.log(parseInt(data))
                    this.setState({
                        rating: parseInt(data)
                    })
                }
            });
        });
    }

    // function to be used by grandchild component that will pass a professor id along with a new rating to this component
    updateRating = (id, newRating) => {
        // if professor is found by the id, their rating will be updated
        this.state.professors.map((professor) => {
            if(professor.id === id) {
                let newProfessor = Object.assign({}, this.state);
                newProfessor.professors[id].rating = newRating;
                newProfessor.professors[id].votes += 1;
                this.drizzle.methods._submitRating.cacheSend(professor.id, Math.round(newRating), {gas: 500000});
                this.setState({
                    newProfessor
                });
            }
        });

        
    }



    render() {
        // allows visibility when debugging capturing information regarding props
        return (
            <div>
                <ProfessorList professors={this.state.professors} updateRating={this.updateRating} initialUpdateStars={this.initialUpdateStars} />
            </div>
        );
    }
}
Professors.contextTypes = {
    drizzle: PropTypes.object
}
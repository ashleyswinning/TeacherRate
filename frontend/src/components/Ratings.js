import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ReactStars from 'react-stars';
import PropTypes from 'prop-types';

export default class Ratings extends Component {

    constructor(props) {
        super(props);
        this.state ={
            engaging: 0,
            helpful: 0,
            creative: 0,
            knowledgeable: 0,
            organized: 0
        };

        this.engagingChanged = this.engagingChanged.bind(this);
        this.helpfulChanged = this.helpfulChanged.bind(this);
        this.creativeChanged = this.creativeChanged.bind(this);
        this.knowledgeableChanged = this.knowledgeableChanged.bind(this);
        this.organizedChanged = this.organizedChanged.bind(this);
    }

    engagingChanged = (event) => {
        this.setState({engaging: event});
        console.log(event);
    };

    helpfulChanged = (event) => {
        this.setState({helpful: event});
        console.log(event);
    };

    creativeChanged = (event) => {
        this.setState({creative: event});
        console.log(event);
    };

    knowledgeableChanged = (event) => {
        this.setState({knowledgeable: event});
        console.log(event);
    };

    organizedChanged = (event) => {
        this.setState({organized: event});
        console.log(event);
    };

    handleSubmit = () => {

        let average = this.handleAverage(this.props.professor.rating);
        let finalAverage = (average + this.props.professor.rating) / 2;
        this.props.updateRating(this.props.professor.id, finalAverage);

        this.props.onClose();
    };

    handleAverage = (rating) => {
        const { engaging, helpful, creative, knowledgeable, organized } = this.state;
        return ( (engaging + helpful + creative + knowledgeable + organized) / 5 );
    };

    handleCancel = () => {
        this.setState({
            engaging: 0,
            helpful: 0,
            creative: 0,
            knowledgeable: 0,
            organized: 0
        });

        this.props.onClose();
    };

    render() {

        console.log(this.state);
        console.log(this.props);
        console.log(this.props.professor);

        const centerText = {
            fontFamily: "Titillium Web",
            color: 'black',
            textAlign: 'center',
            width: '95px',
            fontSize: '17px'
        };

        if(!this.props.open) {
            return null;
          }

        return (
            <div>
                <Dialog open={this.props.open} fullWidth={true} maxWidth="xs">
                    <DialogTitle style={{textAlign: 'center', fontFamily: 'Alegreya Sans SC'}}>Rate Your Professor!</DialogTitle>
                    <DialogContent style={{margin: 'auto'}}>
                        <DialogContentText style={centerText}>Engaging</DialogContentText>
                        <ReactStars edit={true} count={5} size={22} color2={'#ffd700'} value={this.state.engaging} onChange={this.engagingChanged}/>

                        <DialogContentText style={centerText}>Helpful</DialogContentText>
                        <ReactStars edit={true} count={5} size={22} color2={'#ffd700'} value={this.state.helpful} onChange={this.helpfulChanged}/>

                        <DialogContentText style={centerText}>Creative</DialogContentText>
                        <ReactStars edit={true} count={5} size={22} color2={'#ffd700'} value={this.state.creative} onChange={this.creativeChanged}/>

                        <DialogContentText style={centerText}>Knowledgeable</DialogContentText>
                        <ReactStars edit={true} count={5} size={22} color2={'#ffd700'} value={this.state.knowledgeable} onChange={this.knowledgeableChanged}/>

                        <DialogContentText style={centerText}>Organized</DialogContentText>
                        <ReactStars edit={true} count={5} size={22} color2={'#ffd700'} value={this.state.organized} onChange={this.organizedChanged}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCancel} variant="contained"
                                size="small" color="primary"
                                style={{backgroundColor: "#db4c40", fontFamily: "Titillium Web"}}>
                        Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} variant="contained"
                                size="small" color="primary"
                                style={{backgroundColor: "#db4c40", fontFamily: "Titillium Web"}}>
                        Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

Ratings.propTypes = {
    professor: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool
};
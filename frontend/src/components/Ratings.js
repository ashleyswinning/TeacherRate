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



    render() {

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
                        <ReactStars edit={true} count={5} size={22} color2={'#ffd700'}/>

                        <DialogContentText style={centerText}>Helpful</DialogContentText>
                        <ReactStars edit={true} count={5} size={22} color2={'#ffd700'}/>

                        <DialogContentText style={centerText}>Creative</DialogContentText>
                        <ReactStars edit={true} count={5} size={22} color2={'#ffd700'}/>

                        <DialogContentText style={centerText}>Knowledgeable</DialogContentText>
                        <ReactStars edit={true} count={5} size={22} color2={'#ffd700'}/>

                        <DialogContentText style={centerText}>Organized</DialogContentText>
                        <ReactStars edit={true} count={5} size={22} color2={'#ffd700'}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.onClose} variant="contained"
                                size="small" color="primary"
                                style={{backgroundColor: "#db4c40", fontFamily: "Titillium Web"}}>
                        Cancel
                        </Button>
                        <Button onClick={this.props.onClose} variant="contained"
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
    professor: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool
};
import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactStars from 'react-stars';
import Ratings from '../Ratings';
import PropTypes from 'prop-types';

// declared styles to be used when ProfessorCard renders
const styles = muiBaseTheme => ({
  card: {
    width: 300,
    margin: "20px",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    height: 200,
    width: '100%',
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  buttonDiv: {
      height: 20
  },
  stars: {
      left: '32%',
      marginTop: '30px'
  },
  expand: {
    transform: 'rotate(0deg)',
    margin: 'auto',
    transition: muiBaseTheme.transitions.create('transform', {
      duration: muiBaseTheme.transitions.duration.shortest,
    }),
  },
  rateText : {
      fontSize: '.8125rem'
  },
  professorCard: {
    display: "inline-block"
  }
});


class ProfessorCard extends Component {

    // initial state of Rating dialog set to false to remain hidden upon the initial render
    state = { 
        display: false
     };

    //  // display set to true to enable view of the Rating dialog
    // displayRating = () => {
    //     this.setState({ display: true});
    // };

    // // display set to false to disable view of the Rating dialog
    // hideDisplayRating = () => {
    //     this.setState({display: false});
    // };

    // Rating dialog view either set to enabled or disabled depending on its current boolean value
    toggleDisplay = () => {
        this.setState({display: !this.state.display});
    };
   
    render() {
        const { classes } = this.props;

        // allows visibility when debugging capturing information regarding props
        //console.log(this.props);

        return (
            <div className={classes.professorCard}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={this.props.professor.imageUrl}
                    />
                    <CardContent className={classes.content}>
                        <Typography
                        className={"MuiTypography--heading"}
                        variant={"h6"}
                        gutterBottom
                        >
                        {this.props.professor.name}
                        </Typography>
                        <Typography
                        className={"MuiTypography--subheading"}
                        variant={"caption"}
                        >
                        {this.props.professor.course}
                        </Typography>
                        <Divider className={classes.divider} light />
                        <CardActions className={classnames(classes.buttonDiv, classes.actions)}>
                            <Button
                                variant="contained"
                                size="small"
                                className={classnames(classes.expand, classes.rateText)}
                                onClick={this.toggleDisplay}
                                aria-expanded={this.state.display}
                                aria-label="Show more"
                                color="primary"
                                style={{backgroundColor: "#db4c40", fontFamily: "Titillium Web"}}
                                >
                                Rate Professor
                            </Button>
                            <Ratings open={this.state.display} onClose={this.toggleDisplay} professor={this.props.professor} updateRating={this.props.updateRating}/>
                        </CardActions>
                        <ReactStars value={this.props.professor.rating} edit={false} className={classes.stars} count={5} size={20} color2={'#ffd700'}/>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

ProfessorCard.defaultProps = {
    professor: {}
};

ProfessorCard.propTypes = {
    professor: PropTypes.object,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfessorCard);
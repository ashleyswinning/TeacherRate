import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from "@material-ui/core/CardContent";
import Collapse from '@material-ui/core/Collapse';
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactStars from 'react-stars';
import PropTypes from 'prop-types';

const styles = muiBaseTheme => ({
  card: {
    maxWidth: 350,
    margin: "auto",
    marginTop: "20px",
    marginBottom: "50px",
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
      position: 'absolute',
      left: '35%'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: muiBaseTheme.transitions.create('transform', {
      duration: muiBaseTheme.transitions.duration.shortest,
    }),
  },
  rateText : {
      fontSize: '.8125rem'
  }
});


class ProfessorCard extends Component {

    state = { expanded: false };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    }
   
    render() {
        const { classes } = this.props;
        console.log(this.props);

        return (
            <div className="professorCard">
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={this.props.professor.imageUrl}
                    />
                    {/* <ReactStars className={classes.stars} count={5} size={20} color2={'#ffd700'}/> */}
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
                        <CardActions className={classnames(classes.buttonDiv, classes.actions)} disableActionSpacing>
                            <Button size="small" color="primary" href="#">
                                View Professor
                            </Button>
                            <Button
                                className={classnames(classes.expand, classes.rateText)}
                                onClick={this.handleExpandClick}
                                aria-expanded={this.state.expanded}
                                aria-label="Show more"
                                color="primary"
                                >
                                Rate Your Professor
                            </Button>
                        </CardActions>
                    </CardContent>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <ReactStars className={classes.stars} count={5} size={20} color2={'#ffd700'}/> 
                            </CardContent>
                    </Collapse>
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
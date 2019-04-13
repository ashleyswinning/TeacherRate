import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class NavBar extends Component{
    render(){
        return(
            <div>
                <AppBar className="appTitle" position="static" style={{backgroundColor: "#db4c40", height: 70}}>
                    <ToolBar>
                        <img src="../images/triangle_logo_1.png" width="45" alt=""/>
                        <Typography variant="title" color="inherit" style={{fontFamily: "Titillium Web", fontSize: "32px", fontWeight: "200", letterSpacing: 5, marginLeft: 10}}>
                            Professor Rate
                        </Typography>
                        <Button variant="text" color="inherit" style={{fontFamily: "Titillium Web", fontSize: "14px", fontWeight: "200", letterSpacing: 5, marginLeft: 730}}>
                            Home
                        </Button>
                        <Button variant="text" color="inherit" style={{fontFamily: "Titillium Web", fontSize: "14px", fontWeight: "200", letterSpacing: 5, marginLeft: 40}}>
                            Professors
                        </Button>
                    </ToolBar>
                </AppBar>
            </div>
        )
    }
}

export default NavBar;
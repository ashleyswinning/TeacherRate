import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class NavBar extends Component{
    render(){
        return(
            <div>
                <AppBar position="static">
                    <ToolBar>
                        <Typography variant="title" color="inherit">
                            ProfessorRate
                        </Typography>
                    </ToolBar>
                </AppBar>
            </div>
        )
    }
}

export default NavBar;
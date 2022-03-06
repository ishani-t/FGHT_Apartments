import React from "react";
import { Link } from "react-router-dom";
import {
    AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';


  const useStyles = makeStyles({
    appBar: {
      height: '70px',
      backgroundColor: '#f9f9f9',
      display: 'flex',
    },
    toolBar: {
      height: '100%',
    },
    buttons: {
      display: 'flex',
    },
    button: {
      alignItems: 'center',
      fontSize: '24px',
      lineHeight: '28px',
      textTransform: 'none',
      padding: '10px',
    },
  });


const NavigationBar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar className={classes.appBar} position="static">
                <Toolbar className={classes.toolBar}>
                    <Button component={Link} to="/"><Typography className={classes.button}>Home</Typography></Button>
                    <Button component={Link} to="/listings"><Typography className={classes.button}>Listings</Typography></Button>
                    <Button component={Link} to="/upload"><Typography className={classes.button}>Upload</Typography></Button>
                </Toolbar>
            </AppBar>
        </>
        
    );
}

export default NavigationBar;

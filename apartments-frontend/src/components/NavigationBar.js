import React, { useState } from 'react';
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
      padding: '12px',
    },
  });


const NavigationBar = ({loggedIn, handleLogIn}) => {
    const classes = useStyles();

    

    return (
        <>
            <AppBar className={classes.appBar} elevation={0} position="static">
                <Toolbar className={classes.toolBar}>
                    <Button component={Link} to="/"><Typography className={classes.button}>Home</Typography></Button>
                    {loggedIn ? <Button component={Link} to="/listings" className={classes.button}>View Listings</Button> : <Button component={Link} to="/listings" className={classes.button}>View Listings</Button>}
                    {loggedIn ? <Button component={Link} to="/editlistings"><Typography className={classes.button}>Edit Your Listings</Typography></Button> : <> </>}
                    {loggedIn ? <Button component={Link} to="/upload"><Typography className={classes.button}>Create Listing</Typography></Button> : <></>}
                    {loggedIn ? <Button onClick={()=>{handleLogIn()}} component={Link} to="/"><Typography className={classes.button}>Logout</Typography></Button> : <></>}
                    {loggedIn ? <></> : <Button component={Link} to="/login" className={classes.button}>Login</Button>}
                </Toolbar>
            </AppBar>
        </>
        
    );
}

export default NavigationBar;

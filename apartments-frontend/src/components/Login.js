import React from 'react'
import { createStyles, makeStyles, Link } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";



const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    container: {
      borderStyle: "solid",
      borderColor: "#E5E5E5",
      borderRadius: "20px",
      borderWidth: "thin",
      width: "80%",
      [theme.breakpoints.up("md")]: {
        width: "50%",
      },
      height: "75%",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      padding: "5%",
      justifyContent: "space-evenly",
    },
    formStyle: {
      textAlign: "center",
      width: "100%",
      height: "70%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
    },
    textInput: {
      width: "100%",
      margin: "30px, 0%",
      root: {
        "&:focused": {
          color: "green",
          outlineColor: "green",
        },
        "&:selected": {
          color: "green",
          outlineColor: "green",
        },
      },
    },
    emailInput: {
      width: "100%",
      margin: "10%, 0%",
      root: {
        "&:focused": {
          color: "green",
          outlineColor: "green",
        },
        "&:selected": {
          color: "green",
          outlineColor: "green",
        },
      },
    },
    linkText: {
      textDecoration: "underline",
      textAlign: "right",
      width: "100%",
      margin: "0% auto",
    },
    button: {
      alignItems: "center",
      fontSize: "24px",
      lineHeight: "28px",
      textTransform: "none",
      width: "100%",
    },
  })
);

const Login = ({handleLogin}) => {
  const classes = useStyles();
  
  return (
    <>
    
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="sm">

        <form className={classes.formStyle}>
          <TextField
            className={classes.textInput}
            label="Username"
            name="token"
            variant="outlined"
            color="primary"
            autoFocus
          />
          <TextField
            className={classes.textInput}
            type="password"
            label="Password"
            name="token"
            variant="outlined"
            color="primary"
          />
          <Button
            className={classes.button}
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              handleLogin();
            }}
            component={Link} 
            to="/">
            Log In
          </Button>
         

          <Link
            className={classes.linkText}
            component="button"
            onClick={(e) => {
              e.preventDefault();

            }}
          >
            Forgot Password
          </Link>
        </form>
      </Container>
    </div>

    </>
  );
}

export default Login;

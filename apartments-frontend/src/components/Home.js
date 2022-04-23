import React from 'react'
import { createStyles, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  container: {
    width: '100%',
  },
  section: {
    padding: '5% 0%',
    margin: '0 auto',
    width: '80%',
    [theme.breakpoints.up('md')]: {
      width: '60%',
    },
  },
  sectionHeader: {
    padding: '20px 0',
    margin: '0 0 0 0',
    // fontSize: '3rem',
  },
  greySection: {
    backgroundColor: '#f9f9f9',
  },
  impactBox: {
    textAlign: 'center',
    padding: '20px 0',
    margin: '30px auto',
    width: '50%',
  },
  impactNum: {
    margin: '0 auto 10px',
    padding: '5px',
    fontSize: '30px',
    border: '1px solid',
    borderColor: '#9A0000',
    backgroundColor: '#9A0000',
    borderRadius: '50%',
    width: '50px',
    color: 'white',
    fontWeight: 'bold',
  },
  impactHeader: {
    margin: '0 auto 10px',
  },
  impactText: {
    fontSize: '1rem',
  },
  cardContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  card: {
    alignContent: 'center',
    margin: '10px 10px',
    border: '1px solid black',
    padding: '20px 30px',
    width: '25%',
    height: '150px',
    minHeight: '80px',
    minWidth: '220px',
  },
  cardName: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  cardBio: {

  },
}));

function Home() {
  const classes = useStyles();
  
  return (
    <>
    
    <div className={classes.container}>
      <div className={classes.section}>
        <Typography variant="h3" className={classes.sectionHeader}>Welcome to FGHT's Apartment Hunting Platform!</Typography>
        <Typography variant="body1">We are a group of students from the University of Illinois Urbana-Champaign passionate about streamlining the process of finding and subleasing apartments.</Typography>
        
        <Typography variant="body1">
          <br />
          We know how hard it is to find or sublease your apartment, especially during the pandemic when lots of tours have become virtual. On campus, it can seem like everyone signs their leases almost a year in advance, and it can be super stressful finding the perfect fit on such a short timeline. 
        </Typography>

      </div>

      <div className={classes.greySection}>
        <div className={classes.section}>
          <div className={classes.impactBox}>
            <Typography className={classes.impactNum}>1</Typography>
            <Typography className={classes.impactHeader} variant="h4">Find Apartments</Typography>
            <Typography className={classes.impactText} variant="body1">Head over to the "Listings" tab to begin finding other apartments. Use the convenient filters to narrow down your search!</Typography>

          </div>

          <div className={classes.impactBox}>
            <Typography className={classes.impactNum}>2</Typography>
            <Typography className={classes.impactHeader} variant="h4">List Your Aparment!</Typography>
            <Typography className={classes.impactText} variant="body1">Upload a video of your apartment to list it on the sight! No fancy camera is required!</Typography>

          </div>

        </div>
      </div>

      <div >
        <div className={classes.section}>
          <Typography variant="h3" className={classes.sectionHeader}>Meet the Team!</Typography>

          <div className={classes.cardContainer}>
            
            <div className={classes.card}>
              <Typography className={classes.cardName}>Snigdha Gupta</Typography>
              <Typography className={classes.cardBio}>Project Manager/Software Developer</Typography>
            </div>

            <div className={classes.card}>
              <Typography className={classes.cardName}>Ishani Tarafdar</Typography>
              <Typography className={classes.cardBio}>Software Developer. Sophomore in CS! Loves React and food.</Typography>
            </div>

            <div className={classes.card}>
              <Typography className={classes.cardName}>Lauren Fiene</Typography>
              <Typography className={classes.cardBio}>Software Developer</Typography>
            </div>

            <div className={classes.card}>
              <Typography className={classes.cardName}>Minkyung Chung</Typography>
              <Typography className={classes.cardBio}>Software Developer</Typography>
            </div>

            <div className={classes.card}>
              <Typography className={classes.cardName}>Charlotte Meng</Typography>
              <Typography className={classes.cardBio}>Software Developer</Typography>
            </div>

            <div className={classes.card}>
              <Typography className={classes.cardName}>Ruidi Huang</Typography>
              <Typography className={classes.cardBio}>Project Manager</Typography>
            </div>
          </div>
        </div>
      </div>

    </div>

    </>
  );
}

export default Home;

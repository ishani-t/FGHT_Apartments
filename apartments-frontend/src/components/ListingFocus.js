import React from 'react'
import { createStyles, makeStyles, Typography, Button, Grid } from '@material-ui/core';
import AptImage from './big_apt_building.jpg'


const useStyles = makeStyles((theme) => createStyles({
  container: {
    width: '100%',
  },
  deleteButton: {

  },
  contactBox: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    marginLeft: '30px',
  },
  detailsBox: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    marginLeft: '30px',
  }
}));

const ListingFocus = ({selectedListing, edit, deleteRecord}) => {
  const classes = useStyles();
  const  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const start_month = months[parseInt(selectedListing.start_per.substring(5,7))-1];
  const start_year = selectedListing.start_per.substring(0,4);
  const end_month = months[parseInt(selectedListing.end_per.substring(5,7))-1];
  const end_year = selectedListing.end_per.substring(0,4);

  return (
    <>
        <div className={classes.container}>

        
        <h1>{selectedListing.title}</h1>
        <Grid container>
            <Grid item xs={12}> 
                <p style={{marginLeft: '30px', padding: '20px', width: '50%', margin: 'auto'}}>{selectedListing.message}</p>
            </Grid>
            <Grid item xs={12}>
                <img src={AptImage} alt="Generic Apartment Building" className={classes.img} />
            </Grid>
            <Grid item xs={12}>
                <div className={classes.detailsBox}>
                <h2>Details</h2>
                <p>{selectedListing.address}</p>
                <p>${selectedListing.rent} / month</p>
                <p>{start_month} {start_year} - {end_month} {end_year}</p>
                <p>{selectedListing.bedrooms} bed / {selectedListing.bathrooms} bath</p>

                <p>Features:</p>
                <ul>
                    {selectedListing.air_conditioning ? <li>Air Conditioning</li> : <></>}
                    {selectedListing.laundry ? <li>In-unit washer/dryer</li> : <></>}
                    {selectedListing.parking ? <li>Parking</li> : <></>}
                </ul>
                </div>
                
            </Grid>
            <Grid item xs={12}>
                <div className={classes.contactBox}>
                <h2>Contact</h2> 
                <p>Name: {selectedListing.u_name}</p>
                <p>Email: {selectedListing.u_email}</p>
                <p>Phone: {selectedListing.phone}</p>

                <p>Instagram: {selectedListing.insta}</p>
                <p>Snapchat: {selectedListing.snapchat}</p>
                </div>
                
            </Grid>
        </Grid>

        {edit ? <Button onClick={() => deleteRecord(selectedListing._id)}style={{minWidth: "100px", minHeight: "50px", fontSize: '30px', borderRadius: '10px', marginBottom: '20px'}} size="large" color="secondary" variant="contained" type="submit">DELETE LISTING</Button> : <> </>}
        </div>
    </>
  );
}

export default ListingFocus;

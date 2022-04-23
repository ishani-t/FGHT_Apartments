import React, {useState, useEffect} from 'react'
import Listing from './Listing'
import ListingFocus from './ListingFocus'
import {Typography, makeStyles, Grid} from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        align: 'center',
        textAlign: 'center',
    },
    sectionHeader: {
        align: 'center',
        padding: '10px 0',
        width: '100%',
        backgroundColor: '#f9f9f9',
        margin: '20px 0 0 0',
        fontSize: '50px'
    },
  });


const Listings = ({edit}) => {
    const [listings, setListings] = useState([]);
    const [selectedListing, setSelectedListing] = useState([]);

    useEffect(() => {
        async function getRecords() {
          const response = await fetch(`http://localhost:5000/record/`);
      
          if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
          }
      
          const records = await response.json();
          console.log(records);
          setListings(records);
          setSelectedListing(records[0])
          console.log(records);
        }
      
        getRecords();
        return;
      }, [listings.length]);

    const handleSelect = (search_id) => {
        setSelectedListing(
            listings.filter(list => {return list._id === search_id;})[0]
        );
        console.log(search_id);
    };

    async function deleteRecord(id) {
        await fetch(`http://localhost:5000/${id}`, {
          method: "DELETE"
        });
      
        const newRecords = listings.filter((el) => el._id !== id);
        setListings(newRecords);
      }

    const classes = useStyles();

    return (
        <div className={classes.container}>
        <Typography className={classes.sectionHeader} variant="h4" >View Listings!</Typography>
        <Grid container>
            <Grid item xs={4}>
                {listings.map((listing) => <Listing key={listing._id} listing={listing} handleSelect={handleSelect}/>)}
            </Grid>

            <Grid item xs={8}>
                {selectedListing.length !== 0 ? <ListingFocus selectedListing={selectedListing} edit={edit} deleteRecord={deleteRecord}/> : <></>} 
            </Grid>
        </Grid>
        </div>
    );
}

export default Listings;
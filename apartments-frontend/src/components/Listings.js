import React from 'react'
import Listing from './Listing'
import {Typography, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        align: 'center',
        textAlign: 'center',
    },
    sectionHeader: {
        align: 'center',
        padding: '20px',
        width: '100%',
        backgroundColor: '#f9f9f9',
        margin: '20px 0 0 0'
    },
  });

  const exListings = [
      {
          title: "Apartment Building",
          price: "500",
      },
      {
        title: "Building Ex",
        price: "600",
    },
    {
        title: "Apartment",
        price: "900",
    },
    {
        title: "House Ex ",
        price: "1100",
    },
    {
        title: "Example",
        price: "800",
    },
    {
        title: "Lorem Ipsum",
        price: "450",
    },
    {
        title: "Random Building",
        price: "700",
    },
      
  ];
const Listings = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
        <Typography className={classes.sectionHeader} variant="h4" >View Listings!</Typography>
        {exListings.map((listing) => <Listing title={listing.title} price={listing.price}/>)}
        </div>
    );
}

export default Listings;
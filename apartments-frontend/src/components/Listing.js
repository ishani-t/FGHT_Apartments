import React from 'react-router-dom';
import { Card, makeStyles, Box, Typography, Button, IconButton, CardContent, CardMedia } from '@material-ui/core';
import AptImage from './apartment_building_pic.jpg'

const useStyles = makeStyles({
  card: {
    width: '500px',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    padding: '10px 5px 10px 10px',
    margin: '10px 0 10px 10px'
  },
  img: {
    alignSelf: 'flex-end',
  },
  cardStuff: {
    width: '100%'
  }
});

const Listing = ({title, price}) => {
  const classes = useStyles();

  return (
    <> 
      <Card variant='outlined' className={classes.card} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline'}}>
      
        <div className={classes.cardStuff} sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              ${price}/month
            </Typography>
          </CardContent>
        </div>

        <img src={AptImage} alt="Generic Apartment Building" className={classes.img} />

      </Card>
    </>
  );
};

export default Listing;
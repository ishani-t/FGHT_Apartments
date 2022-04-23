import React, { useState } from 'react'
import {Typography, makeStyles} from '@material-ui/core'
import FileUpload from './FileUpload.js'

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


const Upload = () => {
    const classes = useStyles();

    const [newUserInfo, setNewUserInfo] = useState({
        profileImages: []
      });
    
      const updateUploadedFiles = (files) =>
        setNewUserInfo({ ...newUserInfo, profileImages: files });
    
      const handleSubmit = (event) => {
        event.preventDefault();
        //logic to create new user...
      };

    return (
        <div className={classes.container}>
            <Typography className={classes.sectionHeader} variant="h4" >Upload Your Video Tour!</Typography>
            
            <form onSubmit={handleSubmit}>
                <FileUpload
                accept=".jpg,.png,.jpeg"
                label="Video Tour"
                multiple
                updateFilesCb={updateUploadedFiles}
                />

                <p>Address: </p>
                <input type="text" />

                <p>Rent: </p>
                <input type="text" />

                <p>Start Date:</p>
                <input type="text" />

                <p>End Date:</p>
                <input type="text" />

                <p>Bedrooms:</p>
                <input type="text" />

                <p>Bathrooms:</p>
                <input type="text" />

                <p>Number Roommates:</p>
                <input type="text" />

                <p>Features:</p>
                <input type="checkbox" /> Air Conditioning <br />
                <input type="checkbox" /> In-unit washer/dryer <br />
                <input type="checkbox" /> Security 
                <p>Submit: </p>

                <p>Contact Information:</p>
                <label>Email: </label><input type="text" /> <br />
                <label>Phone Number: </label><input type="text" /> <br />

                <label>Introduce yourself!</label> <br />
                <textarea></textarea>
                
                <p>Submit: </p>
                <button type="submit">Upload Video Tour</button>


            </form>
        </div>
    );
}

export default Upload;
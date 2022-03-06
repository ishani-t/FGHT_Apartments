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
                <button type="submit">Upload Video Tour</button>
            </form>
        </div>
    );
}

export default Upload;
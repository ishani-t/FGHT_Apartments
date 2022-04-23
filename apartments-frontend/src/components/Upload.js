import React, { useState } from 'react'
import {Typography, makeStyles, Button} from '@material-ui/core'
import { useNavigate } from "react-router";
import FileUpload from './FileUpload.js'

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
        fontSize: '50px',
    },
    topSection: {
      marginTop: '20px',
      textAlign: 'left',
      padding: '30px',
    },
    aptSection: {
      backgroundColor: '#f9f9f9',
      textAlign: 'left',
      padding: '30px'

    },
    contactSection: {
      textAlign: 'left',
      padding: '30px'

    },
    formSection: {
      width: '80%',
      margin: 'auto',
      marginBottom: '40px',
    },
    labels: {
      fontSize: '25px',
      paddingRight: '5px',
    },
    input: {
      width: '250px',
      height: '30px',
      marginRight: '20px',
    },
    textAreaInput: {
      width: '300px',
      resize: 'none',
    },
    headerText: {
      fontSize: '35px',
    },
    button: {
      backgroundColor: '#0E86D4',
      border: 'none',
      color: 'black',
      padding: '40px, 40px',
      textAlign: 'center',
      fontSize: '30px',
      borderRadius: '10px',
    }
    
  });


const Upload = () => {
    const classes = useStyles();

    const [newUserInfo, setNewUserInfo] = useState({
        profileImages: []
      });
    
      const updateUploadedFiles = (files) =>
        setNewUserInfo({ ...newUserInfo, profileImages: files });
    
      const navigate = useNavigate();

      const [form, setForm] = useState({
        title: "",
        address: "",
        rent: "",
        start_per: "",
        end_per: "",
        bedrooms: "",
        bathrooms: "",
        air_conditioning: "",
        laundry: "",
        parking: "",
        u_name: "",
        u_email: "",
        phone: "",
        insta: "",
        snapchat: "",
        message: "",
      });

      async function onSubmit(e) {
        e.preventDefault();
      
        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...form };
      
        await fetch("http://localhost:5000/record/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPerson),
        })
        .catch(error => {
          window.alert(error);
          return;
        });
      
        setForm({
          title: "",
          address: "",
          rent: "",
          start_per: "",
          end_per: "",
          bedrooms: "",
          bathrooms: "",
          air_conditioning: false,
          laundry: false,
          parking: false,
          u_name: "",
          u_email: "",
          phone: "",
          insta: "",
          snapchat: "",
          message: "",
        });
        navigate("/editlistings");
      }
      
      // These methods will update the state properties.
      function updateForm(value) {
        return setForm((prev) => {
          console.log(prev);
          console.log(value);
          return { ...prev, ...value };
        });
      }

    return (
        <div className={classes.container}>
            <Typography className={classes.sectionHeader} variant="h4" >Create a Listing!</Typography>
            
            <form className={classes.formSection} onSubmit={onSubmit}>
                
                <div className={classes.topSection}>
                <Typography className={classes.headerText} variant="h5">Listing Information</Typography>
                <p className={classes.blurb}>
                  Take the time to introduce yourself to potential subleasers! Listing title will appear at the top of your listing, allong with your message. <br></br>
                  Example: <br></br>
                  Listing Title: 4b/2ba apartment for FA'22! Near Green St!
                  Message: Hi! My name is _____________ and I'm looking for someone to take over my lease next fall! You will have three awesome roommates and a convenient location on Green. Message me with any questions!
                </p>


                  <label className={classes.labels}>Listing title: </label>
                  <input className={classes.input} type="text" value={form.title} onChange={(e) => updateForm({ title: e.target.value })}/>

                  <br />
                  <label  className={classes.labels}>Listing Message:</label> <br />
                  <textarea rows="10" cols="120" className={classes.textAreaInput} type="text" value={form.message} onChange={(e) => updateForm({ message: e.target.value })} />
                </div>
                
                <div className={classes.aptSection}>
                  <Typography className={classes.headerText} variant="h5">Apartment Information</Typography>
                  <label className={classes.labels}>Address: </label> 
                  <input className={classes.input} type="text" value={form.address} onChange={(e) => updateForm({ address: e.target.value })}/>

                  <br />

                  <label className={classes.labels}>Rent (monthly): </label>
                  <input className={classes.input} type="text" value={form.rent} onChange={(e) => updateForm({ rent: e.target.value })} pattern="[0-9]+"/>

                  <br />

                  <label className={classes.labels}>Bedrooms:</label>
                  <input className={classes.input} type="text" value={form.bedrooms} onChange={(e) => updateForm({ bedrooms: e.target.value })}/>

                  <label className={classes.labels}>Bathrooms:</label>
                  <input className={classes.input} type="text" value={form.bathrooms} onChange={(e) => updateForm({ bathrooms: e.target.value })}/>

                  <br />

                  <label className={classes.labels}>Sublease Start: </label>
                  <input className={classes.input} type="month" value={form.start_per} onChange={(e) => updateForm({ start_per: e.target.value })}/>

                  <label className={classes.labels}>Sublease End: </label>
                  <input className={classes.input} type="month" value={form.end_per} onChange={(e) => updateForm({ end_per: e.target.value })}/>

                  <br />


                  <p className={classes.labels}>Features:</p>
                  <input type="checkbox" value={!form.air_conditioning} onChange={(e) => updateForm({ air_conditioning: e.target.value })}/><label className={classes.labels}>Air Conditioning </label> <br />
                  <input type="checkbox" value={!form.laundry} onChange={(e) => updateForm({ laundry: e.target.value })}/> <label className={classes.labels}>In-Unit Washer/Dryer </label> <br />
                  <input type="checkbox" value={!form.parking} onChange={(e) => updateForm({ parking: e.target.value })}/> <label className={classes.labels}>Parking </label>
                </div>

                <div className={classes.contactSection}>
                  <Typography className={classes.headerText} variant="h5">Contact Information</Typography>
                  <label className={classes.labels}>Name: </label>
                  <input className={classes.input} type="text" value={form.u_name} onChange={(e) => updateForm({ u_name: e.target.value })}/> <br />

                  <label className={classes.labels}>Email: </label>
                  <input className={classes.input} type="text" value={form.u_email} onChange={(e) => updateForm({ u_email: e.target.value })}/> <br />

                  <label className={classes.labels}>Phone Number: </label>
                  <input className={classes.input} type="text" value={form.phone} onChange={(e) => updateForm({ phone: e.target.value })}/> <br />

                  <label className={classes.labels}>Instagram: </label>
                  <input className={classes.input} type="text" value={form.insta} onChange={(e) => updateForm({ insta: e.target.value })}/> <br />

                  <label className={classes.labels}>Snapchat: </label>
                  <input className={classes.input} type="text" value={form.snapchat} onChange={(e) => updateForm({ snapchat: e.target.value })}/> <br />
                </div>
                
                

                
               
                <FileUpload
                accept=".jpg,.png,.jpeg"
                label="Video Tour"
                multiple
                updateFilesCb={updateUploadedFiles}
                />

                <Button style={{minWidth: "500px", minHeight: "50px", fontSize: '30px'}} size="large" color="primary" variant="contained" type="submit">Submit</Button>

            </form>
        </div>
    );
}

export default Upload;
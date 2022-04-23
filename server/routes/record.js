const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("apartments");
  db_connect
    .collection("listings")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("listings")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    title: req.body.title,
    address: req.body.address,
    rent: req.body.rent,
    start_per: req.body.start_per,
    end_per: req.body.end_per,
    bedrooms: req.body.bedrooms,
    air_conditioning: req.body.air_conditioning,
    laundry: req.body.laundry,
    parking: req.body.parking,
    u_name: req.body.u_name,
    u_email: req.body.u_email,
    phone: req.body.phone,
    insta: req.body.insta,
    snapchat: req.body.snapchat,
    message: req.body.message,
  };
  db_connect.collection("listings").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();  
  let myquery = { _id: ObjectId( req.params.id )};  
  let newvalues = {    
    $set: {      
        title: req.body.title,
        address: req.body.address,
        rent: req.body.rent,
        start_per: req.body.start_per,
        end_per: req.body.end_per,
        bedrooms: req.body.bedrooms,
        air_conditioning: req.body.air_conditioning,
        laundry: req.body.laundry,
        parking: req.body.parking,
        u_name: req.body.u_name,
        u_email: req.body.u_email,
        phone: req.body.phone,
        insta: req.body.insta,
        snapchat: req.body.snapchat,
        message: req.body.message,    
  },  
};
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("listings").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;

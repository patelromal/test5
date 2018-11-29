const functions = require('firebase-functions');

const express = require('express');
const MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID;
const bodyParser= require('body-parser')
const app = express();
var dbase;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect('mongodb://user1:welcome01@ds127342.mlab.com:27342/sspou', (err, db) => {
  dbase = db.db("sspou");
  if (err) return console.log(err)
  app.listen(3000, () => {
    console.log('app working on 3000')
  })
})

// var dbase = db.db("sspou");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.students = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");

    dbase.collection('students').find().toArray( (results) => {
        response.send(results);
    });

});

// app.post('/name/add', (req, res, next) => {

//     var name = {
//       first_name: req.body.first_name,
//       last_name: req.body.last_name
//     };

//     dbase.collection("name").save(name, (err, result) => {
//       if(err) {
//         console.log(err);
//       }

//       res.send('name added successfully');
//     });
//   });

const functions = require('firebase-functions');
const mongoose  = require('mongoose');
const express = require('express');
const MongoClient = require('mongodb');
// var ObjectID = require('mongodb').ObjectID;
const bodyParser= require('body-parser')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const connectMongoDB = () => MongoClient.connect('mongodb://user1:welcome01@ds127342.mlab.com:27342/sspou')

// const students = (req, res) => {
//   return connectMongoDB()
//     .then(
//       db => db.collection('students')
//         .find({})
//         .toArray()
//         .then(documents => ({db, documents}))
//     )
//     .then(({db, documents}) => {
//       db.close()
//       return documents
//     })
//     .then(contacts => res.json(contacts))
//     .catch(err => res.status(400).send(err.toString()))
// }

// export const handler = students;

// MongoClient.connect('mongodb://user1:welcome01@ds127342.mlab.com:27342/sspou', (err, db) => {
//   var dbase = db.db("sspou");
//   if (err) return console.log(err)
//   app.listen(3000, () => {
//     console.log('app working on 3000')
//   })

  exports.students = functions.https.onRequest((request, res) => {
    return connectMongoDB()
    .then(
      db => db.collection('students')
        .find({})
        .toArray()
        .then(documents => ({db, documents}))
    )
    .then(({db, documents}) => {
      db.close()
      return documents
    })
    .then(students => res.json(students))
    .catch(err => res.status(400).send(err.toString()))

        // dbase.collection('students').find().toArray( (results) => {
        //     response.send(results);
        // });

    });

// var dbase = db.db("sspou");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

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

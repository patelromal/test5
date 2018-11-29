// import * as functions from 'firebase-functions';
// const StudentsController  = require('./resources/controllers/index.js');
// // const CourseController = require('./controllers');

// // The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.

// // The Firebase Admin SDK to access the Firebase Realtime Database.
// const admin = require('firebase-admin');
// admin.initializeApp();

// // // Start writing Firebase Functions
// // // https://firebase.google.com/docs/functions/typescript
// //
// export const students = functions.https.onRequest(new StudentsController().route());

// const MongoClient = require('mongodb').MongoClient
// const app = express();

// MongoClient.connect('mongodb://user1:welcome01@ds127342.mlab.com:27342/sspou', (err, db) => {
//   var dbase = db.db("crud");
//   if (err) return console.log(err)
//   app.listen(3000, () => {
//     console.log('app working on 3000')
//   })
// })
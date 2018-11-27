import * as functions from 'firebase-functions';
const StudentsController  = require('./resources/controllers/index.js');
const CourseController = require('./controllers');

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const students = functions.https.onRequest(new StudentsController().route());

// Defining the Student model in Mongoose

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Student
var Student = new Schema({
  fname: {
    type: String
  },
  lname: {
    type: String
  },
  course: {
    type: String
  }, 
  email: {
    type: String
  }
},{
    collection: 'student'
});

module.exports = mongoose.model('student', Student);

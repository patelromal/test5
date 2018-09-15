var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
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

module.exports = mongoose.model('Student', Student);
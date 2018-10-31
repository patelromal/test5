var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var student = new Schema({
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

//
//export class student {
//    
//   public fname: string;
//   public lname: string; 
//      
//   constructor () {} 
//}
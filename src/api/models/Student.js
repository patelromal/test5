const mongoose  = require('mongoose');

const StudentSchema = new mongoose.Schema({
  lname: String,
  fname: String,
  email: String,
  username: String,
  password: String,
  address: String,
  course: String,
  subcourse: String,
  role: String
});

const Student = mongoose.model('Student', StudentSchema);

export {Student}
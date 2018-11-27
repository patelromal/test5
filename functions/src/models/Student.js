const mongoose  = require('mongoose');

const StudentSchema = new mongoose.Schema({
  lname: String,
  fname: String,
});

const Student = mongoose.model('Student', StudentSchema);

export {Student}
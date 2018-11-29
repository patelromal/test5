const mongoose  = require('mongoose');

let StudentSchema = new mongoose.Schema({
  lname: String,
  fname: String,
});

module.exports = mongoose.model('Student', StudentSchema);
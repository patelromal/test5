const mongoose  = require('mongoose');

let CourseSchema = new mongoose.Schema({
  name: String,
  subcourse: String,
});

module.exports = mongoose.model('Course', CourseSchema);

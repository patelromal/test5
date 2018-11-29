const mongoose  = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: String,
  subcourse: String,
});

const Course = mongoose.model('Course', CourseSchema);

export {Course}
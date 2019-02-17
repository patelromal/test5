const mongoose  = require('mongoose');

const CourseSchema = new mongoose.Schema({
	name: String,
	details: String
});

const Course = mongoose.model('Course', CourseSchema);

export {Course}
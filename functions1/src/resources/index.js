const Router = require('Router');
const StudentsController = require('./controllers');
const CourseController = require('./controllers');

export default function() {
	var api = Router();
	api.use('/students', new StudentsController().route());
	api.use('/courses', new CourseController().route());
	return api;
}

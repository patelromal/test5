import { Router } from 'express';
import { StudentsController } from './controllers/StudentsController';
import { CourseController } from './controllers/CourseController';
import { SubcourseController } from './controllers/SubcourseController';
import { UserController } from './controllers/UserController';


export default function() {
	var api = Router();
	api.use('/students', new StudentsController().route());
	api.use('/courses', new CourseController().route());
	api.use('/subcourses', new SubcourseController().route());
	api.use('/authenticate', new UserController().route());
	return api;
}

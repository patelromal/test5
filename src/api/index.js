import { Router } from 'express';
import { StudentsController,CourseController,UserController } from './controllers';

export default function() {
	var api = Router();
	api.use('/students', new StudentsController().route());
	api.use('/courses', new CourseController().route());
	api.use('/authenticate', new UserController().route());
	return api;
}

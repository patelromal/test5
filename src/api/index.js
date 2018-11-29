import { Router } from 'express';
import { StudentsController,CourseController } from './controllers';

export default function() {
	var api = Router();
	api.use('/students', new StudentsController().route());
	api.use('/courses', new CourseController().route());
	return api;
}

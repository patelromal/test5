import BaseController from './base';
import { Student } from '../../models/Student';
import { Course } from '../../models/Course';

export class StudentsController extends BaseController{
  constructor(){
    super(Student, '_id');
  }
}

export class CourseController extends BaseController{
  constructor(){
    super(Course, '_id');
  }
}

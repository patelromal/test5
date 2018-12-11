import BaseController from './base';
import { Student } from '../models/Student';
import { Course } from '../models/Course';
import { User } from '../models/User';

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

export class UserController extends BaseController{
  constructor(){
    super(User, '_id');
  }
}

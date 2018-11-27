const BaseController = require('./base');
const Student = require('../../models/Student');
const Course = require('../../models/Course');

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

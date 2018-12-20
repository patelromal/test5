import { Course } from '../models/Course';
import BaseController from './base';

export class CourseController extends BaseController{
  constructor(){
    super(Course, '_id');
  }
}
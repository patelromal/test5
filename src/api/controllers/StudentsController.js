import { Student } from '../models/Student';
import BaseController from './base';

export class StudentsController extends BaseController{
  constructor(){
    super(Student, '_id');
  }
}
import { User } from '../models/User';
import BaseController from './base';

export class UserController extends BaseController{
  constructor(){
    super(User, '_id');
  }
}
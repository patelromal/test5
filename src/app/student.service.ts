import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { student } from './models/student';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StudentService {

  result: any;
  constructor(private http: HttpClient) {}
  student: student;

  addStudent(studentData) {
    const uri = 'https://vast-springs-98239.herokuapp.com/students/add';
    const obj = {
      fname: studentData.fname,
      lname: studentData.lname
    };
    return this
      .http
      .post(uri, obj)
      .map(res => {
      	return res;
      });
  }

  getStudents(){
    const uri = 'https://vast-springs-98239.herokuapp.com/students';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editStudent(id) {
    const uri = 'https://vast-springs-98239.herokuapp.com/students/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateStudent(studentData) {
    const uri = 'https://vast-springs-98239.herokuapp.com/students/update/' + studentData._id;
    const obj = {
        fname: studentData.fname,
        lname: studentData.lname
    };
    return this
	      .http
	      .post(uri, obj)
	      .map(res => {
	      	return res;
	      });
  }

  deleteStudent(id) {
    const uri = 'https://vast-springs-98239.herokuapp.com/students/delete/' + id;
    return this
        .http
        .get(uri)
        .map(res => {
          return res;
        });
  }
}
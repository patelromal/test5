import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Student } from './../../models/Student';

@Injectable()
export class StudentService {

  result: any;
  constructor(private http: HttpClient) {}
  student: Student;

  addStudent(studentData) {
    const uri = 'http://localhost:4000/students/add';
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

  getStudents() {
    const uri = 'http://localhost:4000/students';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editStudent(id) {
    const uri = 'http://localhost:4000/students/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateStudent(fname, lname, id) {
    const uri = 'http://localhost:4000/students/update/' + id;
    const obj = {
        fname: fname,
        lname: lname
    };
    return this
	      .http
	      .post(uri, obj)
	      .map(res => {
	      	return res;
	      });
  }

  deleteStudent(id) {
    const uri = 'http://localhost:4000/students/delete/' + id;
    return this
        .http
        .get(uri)
        .map(res => {
          return res;
        });
  }
}
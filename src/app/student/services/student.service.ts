import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { student } from '../../models/student';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StudentService {

  result: any;
  constructor(private http: HttpClient) {}
  student: student;

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

  getStudents(){
    const uri = 'http://localhost:4000/students';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editStudent(id) {
    const uri = 'http://localhost:4000/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateStudent(studentData) {
    const uri = 'http://localhost:4000/students/update/' + studentData._id;
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
    const uri = 'http://localhost:4000/students/delete/' + id;
    return this
        .http
        .get(uri)
        .map(res => {
          return res;
        });
  }
}
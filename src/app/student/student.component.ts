import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { StudentService } from '../service/student.service'
import { Student } from '../model/student.model'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];
  student: Student[]= [];

  constructor(private studentService: StudentService) {}
  
  ngOnInit() {
      this.signupForm = new FormGroup({
          'userData': new FormGroup({
            'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
            'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
          }),
          'gender': new FormControl('male'),
          'hobbies': new FormArray([])
        });
  }
  
  onSave(){
//      this.studentService.onAddStudent(this.signupForm)
  }

  onSubmit() {
//    console.log(this.signupForm);
  }
  
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
      if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
        return {'nameIsForbidden': true};
      }
      return null;
    }
  
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
      const promise = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'test@test.com') {
            resolve({'emailIsForbidden': true});
          } else {
            resolve(null);
          }
        }, 1000);
      });
      return promise;
    }
  
//  onAddHobby(){
//      const control = new FormControl(null);
//      (<FormArray>this.signupForm.get('hobbies')).push(control);
//  }
 
}
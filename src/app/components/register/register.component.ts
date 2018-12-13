import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { StudentService } from '../../services/student.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message: any
  isValid: boolean;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private studentService: StudentService) { }

  ngOnInit() {
      this.createForm();
  }

  createForm() {
      this.registerForm = this.formBuilder.group({
          fname: ['', Validators.required],
          lname: ['', Validators.required],
          email: ['', Validators.required],
          username: ['', Validators.required],
          password: ['', Validators.required],
          address: [''],
          course: ['', Validators.required],
          subcourse: ['', Validators.required]
      });
  }

  create(formData){
    var formData = this.registerForm.value;
        this.studentService.create(formData).subscribe((res) => {
            this.message = 'successfully registered.';
            this.isValid=true;
            this.reset();
        }, (error) => {
            this.message = 'Faile while register. Please try again.';
            this.isValid=false;
        });
  }
  reset(){
    this.registerForm.reset();
  }

}

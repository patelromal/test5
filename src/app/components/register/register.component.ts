import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { CourseService } from '../../services/course.service';
import { SubcourseService } from '../../services/subcourse.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message: any;
  isValid: boolean;
  registerForm: FormGroup;
  courses: any;
  subCourses: any;
  selectedCourse: any;
  selectedSubCourse: any;
  searchText: any;

  constructor(private formBuilder: FormBuilder,
    private studentService: StudentService,
    private subcourseService: SubcourseService,
    private courseService: CourseService) { }

  ngOnInit() {
      this.createForm();
      this.getCourses();
      this.getSubCourses('');
  }

  public getCourses() {
    this.courseService.get().subscribe(res => {
        this.courses = res;
    });
  }

  public getSubCourses(courseId) {
    this.subcourseService.findOne(courseId).subscribe(res => {
            this.subCourses = res;
    });
  }

  public onChangeCourse(selectedCourse){
    this.selectedCourse = selectedCourse;
  }

  createForm() {
      this.registerForm = this.formBuilder.group({
          fname: [''],
          lname: [''],
          email: [''],
          username: [''],
          password: [''],
          address: [''],
          course: [''],
          subcourse: [''],
          selectedCourse: [''],
          searchText: ['']
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

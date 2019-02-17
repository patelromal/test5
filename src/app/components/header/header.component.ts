import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../services/login.service';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  courseList: any;
    
  constructor(private modalService: NgbModal,
              private courseService: CourseService,
              public loginService: LoginService) { }

  ngOnInit(){
    this.getCourseList();
  }

  public getCourseList() {
    this.courseService.get().subscribe(res => {
        this.courseList = res;
        console.log(this.courseList);
    });
  }
  
  public onLogin(){
      this.modalService.open(LoginComponent);
  }
  public onLogout(){
    this.loginService.logout();
  }

}

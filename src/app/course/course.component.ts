import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{
    constructor(private router: Router){
        
    }
    ngOnInit(){
        
    }
//    onLoadStudent(id: number){
//        this.router.navigate(['/student',id,'edit'],
//         {queryParams: {allowEdit: '1'}, fragment: 'loading'});
//    }

}

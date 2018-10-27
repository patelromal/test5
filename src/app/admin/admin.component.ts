import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student/services/student.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loadedFeature = 'managecourse';

  onNavigate(feature: string) {
    console.log('feature:::::: ' + feature);
    this.loadedFeature = feature;
  }
  
  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService) {
  }
  
  ngOnInit() {
  }
  

  
}

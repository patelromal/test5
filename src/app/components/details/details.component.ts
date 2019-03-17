import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { GridOptions } from 'ag-grid';
import { PageActionComponent} from '../../common/components/page-action/page-action.component';
import { AlertService } from '../../common/services/alert.service';
import { ConfirmationDialogService } from '../../common/services/confirmation-dialog.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { SubcourseService } from '../../services/subcourse.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
        
  id: number;
  private sub: any;
  subCourseList: any;    

  constructor(private route: ActivatedRoute,
              private subCourseService: SubcourseService) {}

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getSubCourseDetails();  
    });
  }
    
  public getSubCourseDetails() {
    this.subCourseService.findOne(this.id).subscribe(res => {
        this.subCourseList = res;
        console.log(res);
    });
  }  

}

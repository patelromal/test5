import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { GridOptions } from 'ag-grid';
import { PageActionComponent} from '../../common/components/page-action/page-action.component';
import { AlertService } from '../../common/services/alert.service';
import { ConfirmationDialogService } from '../../common/services/confirmation-dialog.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { SubproductService } from '../../services/subproduct.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
        
  id: number;
  private sub: any;
  subProductList: any;    

  constructor(private route: ActivatedRoute,
              private subproductservice: SubproductService) {}

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getSubCourseDetails();  
    });
  }
    
  public getSubCourseDetails() {
    this.subproductservice.findOne(this.id).subscribe(res => {
        this.subProductList = res;
        console.log(res);
    });
  }  

}

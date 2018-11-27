import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CourseService } from './service/course.service';
import { GridOptions } from 'ag-grid';
import { PageActionComponent} from '../common/components/page-action/page-action.component';
import { AlertService } from '../common/services/alert.service';
import { ConfirmationDialogService } from '../common/services/confirmation-dialog.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{

    public courseForm: FormGroup;
    rowData: any;

    public gridOptions: GridOptions;
    private gridApi;
    public columnDefs;

    constructor(private fb: FormBuilder,
                private courseService: CourseService,
                private confirmationDialogService: ConfirmationDialogService,
                private alertService: AlertService){
        this.createForm();
    }
    ngOnInit(){
        this.getData();
    }

    public getData() {
    this.courseService.get().subscribe(res => {
        this.rowData = res;
    });
  }

    createForm() {
      this.courseForm = this.fb.group({
          id: [''],
          name: ['', [Validators.required as any]],
          subcourse: ['', [Validators.required as any]],
      });
    }

    create() {
        this.courseService.create(this.courseForm.value).subscribe((res) => {
            console.log('res : ' + res);
        }, (error) => {
            console.log('this.errorMessage : ' + error);
        });
  }

  public delete(selectedRow) {
        this.confirmationDialogService.confirm(
        'Please confirm..', 
        'Do you want to delete this course information ... ? ' + selectedRow.name,
        'Ok','Cancel','sm')
        .then( (confirmed) => {
            if(confirmed){
                this.courseService.delete(selectedRow._id).subscribe(() => {
                    this.getData();
                    this.alertService.showSuccessMessage('succesfully deleted course information ' +  selectedRow.name,'top',2000);
                })
            }
        })
        .catch(() => console.log('User dismissed the confirm delete dialog....'));   
  }

  public onGridReady(params) {
      this.columnDefs = [
      {headerName: 'Name', field: 'name'},
      {headerName: 'Sub Course', field: 'subcourse' },
      {cellRendererFramework: PageActionComponent,
          cellRendererParams: {pageAction: 'edit'},
              width: 40, tooltip: () => 'Edit'},
      {cellRendererFramework: PageActionComponent,
          cellRendererParams: {pageAction: 'delete'},
              width: 40, tooltip: () => 'Delete'},
      ];

      this.gridOptions = <GridOptions> {
              rowData : this.rowData,
              rowHeight : 36,
              context : { componentParent : this } };

      this.gridApi = params.api;
      this.gridApi.gridOptions = this.gridOptions;

//      setTimeout(() => { this.gridApi.sizeColumnsToFit(); });
//      window.addEventListener("resize", this.sizeColumnsToFit.bind(this));
  }

    public editSubmit(courseForm) {
    //   const studentData = form.value;
    //   if (studentData.id !== null) {
    //       this.updateStudent(studentData);
    //       this.closeModal();
    //       //this.alertService.showSuccessMessage('succesfully updated student information ' + studentData.fname,'top',2000);
    //       this.alertService.openSnackBar('succesfully updated student information ' + studentData.fname,'','success');
    //   } else {
    //       this.addStudent(studentData);
    //       this.alertService.showSuccessMessage('succesfully Addedd student information','top',2000);
    //   }
  }

}

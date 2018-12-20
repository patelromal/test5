import { SubcourseService } from '../../services/subcourse.service';
import { CourseService } from '../../services/course.service';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GridOptions } from 'ag-grid';
import { PageActionComponent} from '../../common/components/page-action/page-action.component';
import { AlertService } from '../../common/services/alert.service';
import { ConfirmationDialogService } from '../../common/services/confirmation-dialog.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-subcourse',
  templateUrl: './subcourse.component.html',
  styleUrls: ['./subcourse.component.css']
})
export class SubcourseComponent implements OnInit {

  public dataForm: FormGroup;
    rowData: any;
    courses: any;
    public gridOptions: GridOptions;
    private gridApi;
    public columnDefs;

    modalRef: NgbModalRef;

    @ViewChild('dataModal')
    private dataModal: TemplateRef<any>;

    constructor(private fb: FormBuilder,
                private subCourseService: SubcourseService,
                private courseService: CourseService,
                private modalService: NgbModal,
                private confirmationDialogService: ConfirmationDialogService,
                private alertService: AlertService){
        this.createForm();
    }
  ngOnInit(){
    this.getData();
    this.getCourses();
  }

  public getData() {
    this.subCourseService.get().subscribe(res => {
        this.rowData = res;
    });
  }

  create(formData){
        this.subCourseService.create(formData).subscribe((res) => {
            this.closeModal();
            this.getData();
        }, (error) => {
            // this.errorMessage = error;
            // console.log('this.errorMessage : ' + error);
            // this.alertService.showError(error);
            // this.alertService.danger({message: this.errorMessage, timed: false, closeable: true});
        });
  }

  public getCourses() {
    this.courseService.get().subscribe(res => {
        this.courses = res;
    });
  }

  createForm() {
    this.dataForm = this.fb.group({
        id: [''],
        name: ['', [Validators.required as any]],
        course: [''],
    });
  }

  public edit(selectedData) {
      this.dataForm.setValue({
          id: selectedData._id,
          name: selectedData.name,
          course: selectedData.course._id,
      });
      this.modalRef =  this.modalService.open(this.dataModal);
  }

  public delete(selectedRow) {
        this.confirmationDialogService.confirm(
        'Please confirm..', 
        'Do you want to delete this course information ... ? ' + selectedRow.name,
        'Ok','Cancel','sm')
        .then( (confirmed) => {
            if(confirmed){
                this.subCourseService.delete(selectedRow._id).subscribe(() => {
                    this.getData();
                    this.alertService.showSuccessMessage('succesfully deleted course information ' +  selectedRow.name,'top',2000);
                })
            }
        })
        .catch(() => console.log('User dismissed the confirm delete dialog....'));   
  }

  public onGridReady(params) {
      this.columnDefs = [
      {headerName: 'Course', field: 'course.name' },
       {headerName: 'Sub Course', field: 'name'},
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
  }

    public editSubmit(dataForm) {
      const formData = dataForm.value;
      if (formData.id !== null) {
          this.update(formData);
          this.closeModal();
          this.alertService.openSnackBar('succesfully updated course information ' + formData.name,'','success');
      } else {
          this.create(formData);
          this.alertService.showSuccessMessage('succesfully Addedd student information','top',2000);
      }
  }

  update(formData) {
      this.subCourseService.update(formData).subscribe(() => {
          this.getData();
      });
  }

  public openModal() {
      this.dataForm.reset();
      this.modalRef =  this.modalService.open(this.dataModal);
  }

  public closeModal() {
      this.modalRef.close();
  }

}

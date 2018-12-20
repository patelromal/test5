import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { GridOptions } from 'ag-grid';
import { PageActionComponent} from '../../common/components/page-action/page-action.component';
import { AlertService } from '../../common/services/alert.service';
import { ConfirmationDialogService } from '../../common/services/confirmation-dialog.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{

    public dataForm: FormGroup;
    rowData: any;

    public gridOptions: GridOptions;
    private gridApi;
    public columnDefs;

    modalRef: NgbModalRef;

    @ViewChild('dataModal')
    private dataModal: TemplateRef<any>;

    constructor(private fb: FormBuilder,
                private courseService: CourseService,
                private modalService: NgbModal,
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
    this.dataForm = this.fb.group({
        id: [''],
        name: ['', [Validators.required as any]],
        details: ['', [Validators.required as any]],
    });
  }

  public edit(selectedData) {
      this.dataForm.setValue({
          id: selectedData._id,
          name: selectedData.name,
          details: selectedData.details,
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
      {headerName: 'Details', field: 'details' },
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
      this.courseService.update(formData).subscribe(() => {
          this.getData();
      });
  }

  create(formData){
        this.courseService.create(formData).subscribe((res) => {
            this.closeModal();
            this.getData();
        }, (error) => {
            // this.errorMessage = error;
            // console.log('this.errorMessage : ' + error);
            // this.alertService.showError(error);
            // this.alertService.danger({message: this.errorMessage, timed: false, closeable: true});
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

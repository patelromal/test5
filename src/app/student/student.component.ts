import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { StudentService } from './services/student.service';
import { MatDialog } from '@angular/material';
// import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { PageActionComponent} from '../common/components/page-action/page-action.component';
import { DataService } from '../common/services/data.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { GridOptions } from 'ag-grid';
import { AlertService } from '../common/services/alert.service';
// import { ModalService } from '../common/services/modal.service';
import { ConfirmationDialogService } from '../common/services/confirmation-dialog.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {

  students: any
  public student: any;
  private gridApi;
  public columnDefs;
//dialogConfig = new MatDialogConfig();
  public editMode = true;
  public studentForm: FormGroup;
  modalRef: NgbModalRef;
  modalModule: ModalModule;
  public gridOptions: GridOptions;

  message: string = 'Snack Bar opened.';
  actionButtonLabel: string = 'Retry';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  addExtraClass: boolean = false;
  
  @ViewChild('studentModal')
  private studentModal: TemplateRef<any>;

  public errorMessage: any;

  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private alertService: AlertService,
              private studentService: StudentService,
              private dataService: DataService,
              private modalService: NgbModal,
              public viewContainerRef: ViewContainerRef,
              public snackBar: MatSnackBar,
              public ngxSmartModalService: NgxSmartModalService,
              private confirmationDialogService: ConfirmationDialogService) {
        this.createForm();
        this.gridOptions = <GridOptions> {context: {componentParent: this}};
   }

  ngOnInit() {
      this.createForm();
      this.getStudents();
  }

  open() {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    this.snackBar.open(this.message, this.action ? this.actionButtonLabel : undefined, config);
  }

  createForm() {
      this.studentForm = this.fb.group({
          id: [''],
          fname: ['', [Validators.required as any]],
          lname: ['', [Validators.required as any]],
      });
  }

  public newStudent() {
      this.studentForm.reset();
      this.editMode = false;
      this.ngxSmartModalService.getModal('popupOne').open();
  }

  public onGridReady(params) {
      this.columnDefs = [
      {headerName: 'First Name', field: 'fname'},
      {headerName: 'Last Name', field: 'lname' },
      {cellRendererFramework: PageActionComponent,
          cellRendererParams: {pageAction: 'edit'},
              width: 40, tooltip: () => 'Edit'},
      {cellRendererFramework: PageActionComponent,
          cellRendererParams: {pageAction: 'delete'},
              width: 40, tooltip: () => 'Delete'},
      ];

      this.gridOptions = <GridOptions> {
              rowData : this.students,
              rowHeight : 36,
              context : { componentParent : this } };

      this.gridApi = params.api;
      this.gridApi.gridOptions = this.gridOptions;

//      setTimeout(() => { this.gridApi.sizeColumnsToFit(); });
//      window.addEventListener("resize", this.sizeColumnsToFit.bind(this));
  }

  public openConfirmationDialog() {
    this.confirmationDialogService.confirm(
        'Please confirm..', 
        'Do you want to delete this student information ... ?',
        'Ok','Cancel','lg')
    .then((confirmed) => console.log('User confirmed:', confirmed))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  public editSubmit(studentForm) {
      const studentData = studentForm.value;
      if (studentData.id !== null) {
          this.updateStudent(studentData);
          this.closeModal();
          //this.alertService.showSuccessMessage('succesfully updated student information ' + studentData.fname,'top',2000);
          this.alertService.openSnackBar('succesfully updated student information ' + studentData.fname,'','success');
      } else {
          this.addStudent(studentData);
          this.alertService.showSuccessMessage('succesfully Addedd student information','top',2000);
      }
  }

  public delete(selectedStudent) {
        this.confirmationDialogService.confirm(
        'Please confirm..', 
        'Do you want to delete this student information ... ? ' + selectedStudent.fname,
        'Ok','Cancel','sm')
        .then( (confirmed) => {
            if(confirmed){
                this.studentService.delete(selectedStudent._id).subscribe(() => {
                    this.getStudents();
                    this.alertService.showSuccessMessage('succesfully deleted student information ' +  selectedStudent.fname,'top',2000);
                })
            }
        })
        .catch(() => console.log('User dismissed the confirm delete dialog....'));   
  }

  updateStudent(studentData) {
      this.studentService.update(studentData).subscribe(() => {
          this.getStudents();
      });
  }

  addStudent(studentData) {
    //   this.studentservice.addStudent(studentData).subscribe(() => {
    //       this.getStudents();
    //       this.studentForm.reset();
    //   });

        this.studentService.create(studentData).subscribe((res) => {
            // this.students.push(res);
            this.closeModal();
            this.getStudents();
            // this.gridApi.setRowData(this.students);
        }, (error) => {
            // this.errorMessage = error;
            // console.log('this.errorMessage : ' + error);
            // this.alertService.showError(error);
            // this.alertService.danger({message: this.errorMessage, timed: false, closeable: true});
        });
  }

  public edit(selectedStudent) {
      this.studentForm.setValue({
          id: selectedStudent._id,
          fname: selectedStudent.fname,
          lname: selectedStudent.lname,
      });
    //   this.modalService.show('studentModal');
      this.modalRef =  this.modalService.open(this.studentModal);
    // this.openDialog(this.studentForm);
    
  }

  public sizeColumnsToFit() {
      this.gridApi.sizeColumnsToFit();
  }

  public openModal() {
      this.studentForm.reset();
      this.modalRef =  this.modalService.open(this.studentModal);
  }

  public closeModal() {
      this.modalRef.close();
  }

//   onRowClicked(event: any, template: TemplateRef<any>) {
//     this.editStudent(event.data);
//     // this.modalRef = this.modalService.show(template);
//   }

  public editStudent(student) {
      this.student = student;
      this.studentForm.setValue({
          id: student._id,
          fname: student.fname,
          lname: student.lname,
      });
  }

//   openDialog(student) {
//     // this.dialogConfig.disableClose = true;
//     // this.dialogConfig.autoFocus = true;

//     const dialogRef = this.dialog.open(DialogBodyComponent, {
//         width: '600px',
//         data: {student}
//     });

    

//     dialogRef.afterClosed().subscribe(() => {
//         this.getStudents();
//     });
//   }

  public getStudents() {
    this.studentService.get().subscribe(res => {
        this.students = res;
    });
  }

  deleteStudent(id) {
      this.openConfirmationDialog();
    // this.studentservice.deleteStudent(id).subscribe(() => {
    //     this.getStudents();
    // });
  }

  openBackDropCustomClass(content) {
    // this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    // this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    // this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    // this.modalService.open(content, { size: 'lg' });
  }

  openVerticallyCentered(content) {
    // this.modalService.open(content, { centered: true });
  }
}

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { StudentService } from './services/student.service';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { PageActionComponent} from '../common/components/page-action/page-action.component';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {GridOptions} from 'ag-grid';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {

  students: any;
  public student: any;
  private gridApi;
  public columnDefs;
  dialogConfig = new MatDialogConfig();
  public editMode = true;
  public studentForm: FormGroup;
  modalRef: BsModalRef;
  modalModule: ModalModule;
  public gridOptions: GridOptions;
  @ViewChild('studentModal')
  private studentModal: TemplateRef<any>;

  constructor(private fb: FormBuilder,
              private studentservice: StudentService,
              private dialog: MatDialog,
              private modalService: BsModalService,
              public ngxSmartModalService: NgxSmartModalService) {
        this.createForm();
        this.gridOptions = <GridOptions> {context: {componentParent: this}};
   }

  ngOnInit() {
      this.createForm();
      this.getStudents();
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
              width: 30, tooltip: () => 'Edit'},
      {cellRendererFramework: PageActionComponent,
          cellRendererParams: {pageAction: 'delete'},
              width: 30, tooltip: () => 'Delete'},
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

  public editSubmit(studentForm) {
      const studentData = studentForm.value;
      this.closeModal();

      if (studentData.id !== undefined) {
        //   this.studentMd=studentData;
          this.updateStudent(studentData);
      } else {
          this.addStudent(studentData);
      }

//      this.pricingService.savePriceType(this.priceType).subscribe(
//          (res) => {
//              if (!this.editMode) {
//                  this.priceTypes.push(res);
//              }
//              this.gridApi.setRowData(this.priceTypes);
//              return true;
//              },
//          (err) => {
//              let error = JSON.parse(err);
//              error = error["message"];
//              this.alertService.danger({message: error, timed: false, closeable: true});
//              return false;
//          });
//      this.modalService.hide("student-edit-modal");
//      this.gridApi.refreshCells();
  }

  updateStudent(studentData) {
      console.log('updateStudent: ' + studentData.id);
      this.studentservice.updateStudent(studentData).subscribe(() => {
          this.getStudents();
      });
  }

  addStudent(studentData) {
      this.studentservice.addStudent(studentData).subscribe(() => {
          this.getStudents();
          this.studentForm.reset();
      });
  }

  public edit(selectedStudent) {
      this.studentForm.setValue({
          id: selectedStudent._id,
          fname: selectedStudent.fname,
          lname: selectedStudent.lname,
      });
      this.modalRef = this.modalService.show(this.studentModal);
  }

  public sizeColumnsToFit() {
      this.gridApi.sizeColumnsToFit();
  }

  openModal(template: TemplateRef<any>) {
      this.studentForm.reset();
      this.modalRef = this.modalService.show(template);
  }

  closeModal() {
      this.modalRef.hide();
  }

  onRowClicked(event: any, template: TemplateRef<any>) {
    this.editStudent(event.data);
    this.modalRef = this.modalService.show(template);
  }

  public editStudent(student) {
      this.student = student;
      console.log(student);
      this.studentForm.setValue({
          id: student._id,
          fname: student.fname,
          lname: student.lname,
      });
  }

  openDialog(student) {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(DialogBodyComponent, {
        data: {student}
    });

    dialogRef.afterClosed().subscribe(() => {
        this.getStudents();
    });
  }

  public getStudents() {
      this.studentservice.getStudents().subscribe(res => {
        this.students = res;
    });
  }

  deleteStudent(id) {
    this.studentservice.deleteStudent(id).subscribe(() => {
        this.getStudents();
    });
  }

}

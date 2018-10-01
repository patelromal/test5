import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig} from "@angular/material";
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { student } from '../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  title = 'Add Student';
  angForm: FormGroup;
  students: any;
  public student : student;
  private gridApi;
  private gridColumnApi;
  private rowSelection;
  dialogConfig = new MatDialogConfig();
  
  constructor(private route: ActivatedRoute, 
  			  private router: Router, 
  			  private fb: FormBuilder,
  			  private studentservice: StudentService,
  			  private dialog: MatDialog) {
    	this.createForm();
    	this.rowSelection = "single";
    	this.student = new student();
   }
   
  openDialog(student) {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    
    this.dialog.open(DialogBodyComponent, { width: '600px', 
    	data: { student }
    });
    
  }
  
  onRowClicked(event: any) { 
  	document.querySelector("#selectedRows").innerHTML = event.data.fname;
  	this.openDialog(event.data);
  }
  
  save() {
    //this.dialogRef.close(this.form.value);
  }
   
  ngOnInit() {
  	this.getStudents();
  }
  
  columnDefs = [
        {headerName: 'First Name', field: 'fname'},
        {headerName: 'Last Name', field: 'lname' },
        {headerName: 'Action', field: 'action'}
  ];
  
  createForm() {
    this.angForm = this.fb.group({
      fname: ['', Validators.required ],
      lname: ['', Validators.required ]
   });
  }
  
  addStudent() {
      this.studentservice.addStudent(this.student).subscribe(res => {
      this.getStudents();
      this.angForm.reset();
    });
  }
  
  getStudents() {
      this.studentservice.getStudents().subscribe(res => {
        this.students = res;
    });
  }
  
  deleteStudent(id) {
    this.studentservice.deleteStudent(id).subscribe(res => {
      this.getStudents();
    });
  }
  
  
}
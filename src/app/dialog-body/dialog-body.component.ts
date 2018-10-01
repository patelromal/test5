import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from "@angular/material";
import { FormArray, FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {

  form: FormGroup;
  fb: FormBuilder;
    	
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
          private studentservice: StudentService,
		  public dialogRef: MatDialogRef<DialogBodyComponent>){
  }

  ngOnInit() {
  }
  
  updateStudent() {
      this.studentservice.updateStudent(this.data.student).subscribe(res => {
          this.dialogRef.close();
    });
  }
  
  save() {
    console.log('save : ' + this.data.student.fname);
    this.updateStudent();
  }
  
  close() {
    this.dialogRef.close();
  }

}

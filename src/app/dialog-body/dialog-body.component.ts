import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from "@angular/material";
import { FormArray, FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {

  form: FormGroup;
  fb: FormBuilder;
    	
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
  			  public dialogRef: MatDialogRef<DialogBodyComponent>){
  }

  ngOnInit() {
  }
  
  save() {
    this.dialogRef.close(this.form.value);
  }
  
  close() {
    this.dialogRef.close();
  }

}

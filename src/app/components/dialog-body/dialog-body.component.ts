import { Component, OnInit, Inject, ViewChild, ContentChild, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {

  form: FormGroup;
  fb: FormBuilder;
  public description: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
          private userService: UserService,
          private router: Router,
          private route: ActivatedRoute,
          public dialogRef: MatDialogRef<DialogBodyComponent>) {
  }

  ngOnInit() {
  }

  updateStudent() {
    //   this.studentservice.updateStudent(this.data.student).subscribe(res => {
    //       this.dialogRef.close();
    // });
  }

  close() {
    this.dialogRef.close();
  }

}

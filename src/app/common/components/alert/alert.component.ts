import {Component, OnInit} from "@angular/core";
import {AlertService} from 'src/app/common/services/alert.service';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material';

@Component({
    selector: "alert",
    styleUrls: ["./alert.component.css"],
    templateUrl: "./alert.component.html",
})
export class AlertComponent implements OnInit {
    public alert: any;
    public isActive: boolean = false;
    public snackBar: MatSnackBar;

    addExtraClass: boolean = false;

    constructor() {
    }

    public ngOnInit() {
        // this.alertService.getAlert().subscribe((alert) => {
        //     this.alert = alert;
        //     if (this.alert.message == "") {
        //         this.isActive = false;
        //     } else {
        //         this.isActive = true;
        //     }
        // });
    }

    public closeAlert() {
        this.isActive = false;
    }

}

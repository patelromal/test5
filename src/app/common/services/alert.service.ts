import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material';
import { AlertComponent } from '../components/alert/alert.component'

@Injectable()
export class AlertService {
    private subject = new Subject<any>();

    //message: string = 'Snack Bar opened.';
    actionButtonLabel: string = 'Retry';
    action: boolean = true;
    setAutoHide: boolean = true;
    // autoHide: number = 2000;
    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    //verticalPosition: MatSnackBarVerticalPosition = 'top';
    alertComponent: AlertComponent;

    constructor(public snackBar: MatSnackBar) { }

    public showSuccessMessage(message,verticalPosition,autoHide) {
        let config = new MatSnackBarConfig();
        config.verticalPosition = verticalPosition;
        config.horizontalPosition = this.horizontalPosition;
        config.duration = this.setAutoHide ? autoHide : 0;
        config.panelClass = 'success';
        this.snackBar.open(message, this.action ? this.actionButtonLabel : undefined, config);
    }

    openSnackBar(message: string, action: string, className: string) {
        this.snackBar.open(message, action, {
        duration: 2000,
        panelClass: [className],
        verticalPosition: 'top'
        });
    }

    public getAlert() {
        return this.subject.asObservable();
    }

    public warning(errorConfig) {
        this.alert("warning", errorConfig.message, errorConfig.timed, errorConfig.closeable);
    }

    public danger(errorConfig) {
        this.alert("danger", errorConfig.message, errorConfig.timed, errorConfig.closeable);
    }

    public info(errorConfig) {
        this.alert("info", errorConfig.message, errorConfig.timed, errorConfig.closeable);
    }

    public success(errorConfig) {
        this.alert("success", errorConfig.message, errorConfig.timed, errorConfig.closeable);
    }

    public clear() {
        this.subject.next();
    }

    private alert(alertType, message, timed, closeable) {
        this.subject.next({
            alertType,
            message,
            closeable,
        });
        if (timed) {
            Observable.timer(2000).subscribe(() => {
                this.subject.next({});
            });
        }
    }
}

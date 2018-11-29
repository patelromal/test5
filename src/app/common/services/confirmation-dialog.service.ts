import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';

@Injectable()
export class ConfirmationDialogService {

  constructor(private modalService: NgbModal) { }

  public confirm(
    title: string,
    message: string,
    btnOkText: string,
    btnCancelText: string,
    dialogSize: string): Promise<boolean> {
    
    const modalRef = this.modalService.open(ConfirmationDialogComponent);

          modalRef.componentInstance.dialogSize = dialogSize;
          modalRef.componentInstance.title = title;
          modalRef.componentInstance.message = message;
          modalRef.componentInstance.btnOkText = btnOkText;
          modalRef.componentInstance.btnCancelText = btnCancelText;
          modalRef.componentInstance.backdropClass = 'light-blue-backdrop';

    return modalRef.result;
  }

}

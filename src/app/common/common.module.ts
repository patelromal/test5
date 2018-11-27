import { NgModule,  ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageActionComponent } from './components/page-action/page-action.component';
import { ConfirmationDialogService } from './services/confirmation-dialog.service';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { AlertService } from "./services/alert.service";
import { AlertComponent } from "./components/alert/alert.component";
import { ModalService } from './services/modal.service';
import { ModalComponent } from "./components/modal/modal.component";
import { DataService } from "./services/data.service";
import { CourseService } from "./../course/service/course.service";

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [PageActionComponent,ConfirmationDialogComponent,AlertComponent,ModalComponent],
  declarations: [ConfirmationDialogComponent,AlertComponent,ModalComponent],
  exports: []
})
export class SmuCommonModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule : SmuCommonModule,
            providers : [AlertService,ConfirmationDialogService,ModalService, DataService, CourseService],
        };
    }
}

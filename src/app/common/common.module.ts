import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageActionComponent } from './components/page-action/page-action.component';
import { ConfirmationDialogService } from './services/confirmation-dialog.service';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { AlertService } from "./services/alert.service";
import { AlertComponent } from "./components/alert/alert.component";
import { ModalService } from './services/modal.service';
import { ModalComponent } from "./components/modal/modal.component";
import { DataService } from "../services/data.service";
import { CourseService } from "../services/course.service";
import { HttpJWT } from "./services/httpjwt";
import { LoaderService } from "./services/loader.service";
import { StudentService } from '../services/student.service';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';

@NgModule({
  imports: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  entryComponents: [PageActionComponent,ConfirmationDialogComponent,AlertComponent,ModalComponent],
  declarations: [
    ConfirmationDialogComponent,
    AlertComponent,
    ModalComponent,
    LoginComponent,
    RegisterComponent],
  exports: []
})
export class SmuCommonModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule : SmuCommonModule,
            providers : [
                  AlertService,
                  ConfirmationDialogService,
                  ModalService, 
                  DataService, 
                  CourseService, 
                  HttpJWT, 
                  LoaderService,
                  StudentService],
        };
    }
}

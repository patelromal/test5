import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageActionComponent } from './components/page-action/page-action.component';
import { ConfirmationDialogService } from './services/confirmation-dialog.service';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { AlertService } from "./services/alert.service";
import { AlertComponent } from "./components/alert/alert.component";
import { ModalService } from './services/modal.service';
import { ModalComponent } from "./components/modal/modal.component";
import { DataService } from "../services/data.service";
import { LoaderService } from "./services/loader.service";
import { UserService } from '../services/user.service';
import { RegisterComponent } from '../components/register/register.component';
import { AuthGuard } from '../services/auth.guard';
import { LoginService } from '../services/login.service';
//import { HttpInterceptor } from '../services/http-interceptor';
import { MustMatchDirective } from './directives/must-match.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { FileUploader, FileDropDirective } from 'ng2-file-upload';

@NgModule({
  imports: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  entryComponents: [PageActionComponent,ConfirmationDialogComponent,
                    AlertComponent,ModalComponent],
  declarations: [
    ConfirmationDialogComponent,
    AlertComponent, ModalComponent, MustMatchDirective],
  exports: []
})
export class SmuCommonModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule : SmuCommonModule,
            providers : [
                  AlertService,
                  LoginService,
                  AuthGuard,
                  ConfirmationDialogService,
                  ModalService, 
                  DataService,
                  LoaderService]
        };
    }
}

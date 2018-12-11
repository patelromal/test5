import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialogRef, MatFormFieldModule,MatSnackBarModule,
         MatButtonModule, MatIconModule, MatInputModule,
         MatPaginatorModule, MatProgressSpinnerModule,
         MatSortModule, MatTableModule, MatToolbarModule} from '@angular/material';
import { CollapsibleModule } from 'angular2-collapsible';
import { PageActionComponent } from './common/components/page-action/page-action.component';
import { SmuCommonModule } from './common/common.module';
import { ModalService } from './common/services/modal.service';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomebodyComponent } from './components/homebody/homebody.component';
import { StudentComponent } from './components/student/student.component';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeadComponent } from './components/head/head.component';
import { MenuComponent } from './components/menu/menu.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { CourseComponent } from './components/course/course.component';
import { ResultComponent } from './components/result/result.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { SessionService } from './services/session.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    HeadComponent,
    MenuComponent,
    AdminComponent,
    AdminHeaderComponent,
    CourseComponent,
    StudentComponent,
    LoginComponent,
    ResultComponent,
    PageActionComponent,
    HomebodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    CollapsibleModule,
    SmuCommonModule.forRoot(),
    NgxSmartModalModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule.forRoot()
  ],
  exports: [
    NgxSmartModalModule, ModalModule
  ],
  providers: [ModalService, BsModalService, NgbActiveModal, SessionService],
  entryComponents: [
    PageActionComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

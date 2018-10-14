import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeadComponent } from './head/head.component';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { CourseComponent } from './course/course.component';
import { ResultComponent } from './result/result.component';
import { StudentComponent } from './student/student.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentService } from './student.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule,MatDialogRef,MatFormFieldModule,
         MatButtonModule, MatIconModule, MatInputModule, 
         MatPaginatorModule, MatProgressSpinnerModule,
         MatSortModule,MatTableModule, MatToolbarModule} from "@angular/material";
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { CollapsibleModule } from 'angular2-collapsible';

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
    ResultComponent,
    StudentComponent,
    SignupComponent,
    SigninComponent,
    DialogBodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    CollapsibleModule
  ],
  providers: [StudentService,AuthService],
  entryComponents: [
    DialogBodyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

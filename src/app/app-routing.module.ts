import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes =[
{ path: '', component: HomeComponent },
{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
{ path: 'aboutus', component: AboutUsComponent },
{ path: 'contactus', component: ContactUsComponent },
{ path: 'course', component: CourseComponent },
{ path: '', redirectTo: '/admin', pathMatch: 'full' },
{ path: 'admin', component: AdminComponent, children: [
   { path: 'managecourse', component: CourseComponent },
   { path: 'managestudent', component: StudentComponent },
 ] },
 { path: 'signup', component: SignupComponent },
 { path: 'signin', component: SigninComponent },
//{ path: 'student', component: StudentComponent },
//{ path: 'student/:id/edit', component: StudentComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
        
}

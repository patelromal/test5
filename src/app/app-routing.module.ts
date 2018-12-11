import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { StudentComponent } from './components/student/student.component';
//import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';

const appRoutes: Routes =[
{ path: '', component: HomeComponent },
{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
{ path: 'aboutus', component: AboutUsComponent },
{ path: 'contactus', component: ContactUsComponent },
{ path: 'course', component: CourseComponent },
{ path: '', redirectTo: '/admin', pathMatch: 'full' },
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
   children: [
       { path: 'managecourse', component: CourseComponent },
       { path: 'managestudent', component: StudentComponent },
   ]
},
// { path: 'signup', component: SignupComponent },
 { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
        
}

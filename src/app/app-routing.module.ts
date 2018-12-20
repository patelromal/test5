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
import { SubcourseComponent } from './components/subcourse/subcourse.component';
import { ResultComponent } from './components/result/result.component';
import { StudentComponent } from './components/student/student.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';

const appRoutes: Routes =[
{ path: '', component: HomeComponent },
{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
{ path: 'aboutus', component: AboutUsComponent },
{ path: 'contactus', component: ContactUsComponent },
{ path: 'course', component: CourseComponent },
{ path: 'subcourse', component: SubcourseComponent },
{ path: '', redirectTo: '/admin', pathMatch: 'full' },
// { path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
{ path: 'admin', component: AdminComponent,
   children: [
       { path: 'managecourse', component: CourseComponent },
       { path: 'managesubcourse', component: SubcourseComponent },
       { path: 'managestudent', component: StudentComponent },
   ]
},
{ path: 'register', component: RegisterComponent },
 { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
        
}

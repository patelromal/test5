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
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { DetailsComponent } from './components/details/details.component';
import { ProductComponent } from './components/product/product.component';
import { SubproductComponent } from './components/subproduct/subproduct.component';

const appRoutes: Routes =[
{ path: 'index', component: HomeComponent },
{ path: 'aboutus', component: AboutUsComponent },
{ path: 'contactus', component: ContactUsComponent },
{ path: 'product', component: ProductComponent },
//{ path: 'subproduct', component: SubproductComponent },
{ path: '', redirectTo: '/index', pathMatch: 'full' },
{ path: 'details/:id', component: DetailsComponent },
// { path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
{ path: 'admin', component: AdminComponent,
   children: [
       { path: 'manageproduct', component: ProductComponent },
       { path: 'managesubproduct', component: SubproductComponent },
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

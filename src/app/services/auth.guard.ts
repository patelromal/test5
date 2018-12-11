import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';
import { LoginComponent } from '../components/login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private modalService: NgbModal,
        private loginService: LoginService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.loginService.currentUserValue;
        if (currentUser) {
            return true;
        }else{
            localStorage.setItem('currenturl', state.url);
            // not logged in so redirect to login page with the return url
            this.modalService.open(LoginComponent);
            // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
}
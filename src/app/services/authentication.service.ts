import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Cookie } from "ng2-cookies/ng2-cookies";
import { DataService } from './data.service'
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { LoginComponent } from '../components/login/login.component';

@Injectable()
export class AuthenticationService {
    
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    uri: any;
    user: any;

    constructor(private router: Router, 
                private dataService: DataService,
                private modalService: NgbModal) {
    //    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    //    this.currentUser = this.currentUserSubject.asObservable();
        this.uri = 'authenticate/users/';
    }

    public open(url){
    // const modalRef = this.modalService.open(LoginComponent);
    //          modalRef.componentInstance.dialogSize = dialogSize;
    //          modalRef.componentInstance.title = title;
    //          modalRef.componentInstance.message = message;
    //          modalRef.componentInstance.btnOkText = btnOkText;
    //          modalRef.componentInstance.btnCancelText = btnCancelText;
    //          modalRef.componentInstance.backdropClass = 'light-blue-backdrop';
  }

    public login(username,password) {
        return this.dataService.post(this.uri,{
          username : username,
          password : password
      }).map(res => {
          if(res != null){
            this.user = res;
            localStorage.setItem('currentUser', this.user.username);
            // this.currentUserSubject.next(this.user.username);
            return res;
          }else{
            return null;
          }
      });
    }
    
    public logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        // this.currentUserSubject.next(null);
        // this.router.navigate(["/login"]);
    }
    
//    public logout() {
//        document.cookie = "currentUser=; path=/";
//        this.router.navigate(["/login"]);
//    }
    
    public get currentUserValue(){
        return '';//this.currentUserSubject.value;
    }

    public getAuthToken(): string | null {
        return Cookie.get("currentUser");
    }

    public isAuthenticated(): boolean {
        return this.getAuthToken() != null;
    }
}

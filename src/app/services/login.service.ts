import { Injectable } from '@angular/core';
import { Cookie } from "ng2-cookies/ng2-cookies";
import { DataService } from './data.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class LoginService {

  public currentUser: Observable<any>;
  private currentUserSubject: BehaviorSubject<any>;
  uri: any;
  user: any;

  constructor(private dataService: DataService) {
    this.uri = 'authenticate/users/';
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
 }

  public login(username,password) {
        return this.dataService.post(this.uri,{
          username : username,
          password : password
      }).map(res => {
          if(res != null){
            this.user = res;
            localStorage.setItem('currentUser', this.user.username);
            this.currentUserSubject.next(this.user.username);
            return res;
          }else{
            return null;
          }
      });
    }

    public isLoggedIn() : Observable<boolean> {
        return this.currentUserSubject.asObservable();
    }

    
    public logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        // this.router.navigate(["/"]);
    }
    
    public get currentUserValue(): any{
        return this.currentUserSubject.value;
    }

    public getAuthToken(): string | null {
        return Cookie.get("currentUser");
    }

    public isAuthenticated(): boolean {
        return this.getAuthToken() != null;
    }
  
    // public open(url){
    // const modalRef = this.modalService.open(LoginComponent);
    //          modalRef.componentInstance.dialogSize = dialogSize;
    //          modalRef.componentInstance.title = title;
    //          modalRef.componentInstance.message = message;
    //          modalRef.componentInstance.btnOkText = btnOkText;
    //          modalRef.componentInstance.btnCancelText = btnCancelText;
    //          modalRef.componentInstance.backdropClass = 'light-blue-backdrop';
  // }
   


}


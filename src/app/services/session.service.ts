import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs/Rx";
import { Subject } from "rxjs/Subject";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public login = new Subject<boolean>();

  constructor() { }

  isLogin(): Observable<boolean> {
      return this.login;
  }
}

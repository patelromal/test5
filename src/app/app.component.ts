import { Component } from '@angular/core';
import * as firebase from 'firebase';
//import { LocationStrategy } from "@angular/common";
//import { EnvironmentService } from "./common/services/environment.service";
//import { ModalService } from "./common/services/modal.service";
//import { ErrorService } from "./common/services/error.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public error: any = {message : ""};
  
//  constructor(
//          private url: LocationStrategy,
//          private router: Router,
//          private errorService: ErrorService,
//          public modalService: ModalService,
//          public envService: EnvironmentService
//  ) { }

  ngOnInit(){
      firebase.initializeApp({
          apiKey: "AIzaSyAEA55kvhmDdzVvrzzp6ICHqrHZCN3nOPs",
          authDomain: "sspjiims-c3f70.firebaseapp.com"
      });
  }
}

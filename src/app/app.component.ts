import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  ngOnInit(){
      firebase.initializeApp({
          apiKey: "AIzaSyAeFGtd5RG4T-hRxdCsz9y5263K6JIJ9Cg",
          authDomain: "student-http.firebaseapp.com"
      });
  }
}

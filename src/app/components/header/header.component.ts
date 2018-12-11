import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal,public loginService: LoginService) { }

  ngOnInit() {
    console.log('HeaderComponent inside ngOnInit')
  }
  
  public onLogin(){
      this.modalService.open(LoginComponent);
  }
  public onLogout(){
    this.loginService.logout();
  }

}

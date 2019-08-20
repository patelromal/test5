import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../services/login.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  productList: any;
    
  constructor(private modalService: NgbModal,
              private productService: ProductService,
              public loginService: LoginService) { }

  ngOnInit(){
    this.getProductList();
  }

  public getProductList() {
    this.productService.get().subscribe(res => {
        this.productList = res;
    });
  }
  
  public onLogin(){
      this.modalService.open(LoginComponent);
  }
  public onLogout(){
    this.loginService.logout();
  }

}

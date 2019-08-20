import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ProductService } from '../../services/product.service';
import { SubproductService } from '../../services/subproduct.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message: any;
  isValid: boolean;
  registerForm: FormGroup;
  products: any;
  subProducts: any;
  selectedProduct: any;
  selectedSubProduct: any;
  searchText: any;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private subproductService: SubproductService,
    private productService: ProductService) { }

  ngOnInit() {
      this.createForm();
      this.getProducts();
      this.getSubProducts('');
  }

  public getProducts() {
    this.productService.get().subscribe(res => {
        this.products = res;
    });
  }

  public getSubProducts(productId) {
    this.subproductService.findOne(productId).subscribe(res => {
            this.subProducts = res;
    });
  }

  public onChangeProduct(selectedProduct){
    this.selectedProduct = selectedProduct;
  }

  createForm() {
      this.registerForm = this.formBuilder.group({
          fname: [''],
          lname: [''],
          email: [''],
          username: [''],
          password: [''],
          address: [''],
          product: [''],
          subproduct: [''],
          selectedProduct: [''],
          searchText: ['']
      });
  }

  create(formData){
    var formData = this.registerForm.value;
        this.userService.create(formData).subscribe((res) => {
            this.message = 'successfully registered.';
            this.isValid=true;
            this.reset();
        }, (error) => {
            this.message = 'Faile while register. Please try again.';
            this.isValid=false;
        });
  }
  reset(){
    this.registerForm.reset();
  }

}

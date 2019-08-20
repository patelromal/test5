import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;
  errorMessage: any;
  isValid: boolean = true;

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private activeModal: NgbActiveModal,
              private loginService: LoginService,
              private router: Router) {
  }
  

  ngOnInit() {
      this.createForm();
   // get return url from route parameters or default to '/'
      this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
      console.log('this.returnUrl : ' + this.returnUrl);
  }
  
  createForm() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
  }
  
  onSignin(form) {
//      this.authenticationService.login(form.username.value,form.password.value);
//      console.log('return url : ' + this.returnUrl);
//      this.activeModal.close(this.dataForm.value);
      
      this.loginService.login(form.username.value,
        form.password.value).subscribe((res) => {
          if(res != null){
              console.log('res : ' + res);
              if(this.close()){
                this.isValid=true;
                  if(res != null){
                      setTimeout(()=>{ 
                        this.router.navigate(['/admin/managestudent']) 
                     }, 1000)
                  }
                if(localStorage.getItem('currenturl') == '/admin'){
                     setTimeout(()=>{ 
                        this.router.navigate(['/admin/managestudent']) 
                     }, 500)
                }
              }
          }else{
              this.isValid=false;
              this.errorMessage = 'Username or password is incorrect';
          }
      }, (error) => {
          this.isValid=false;
          this.errorMessage = 'Service Fail while login users. Please try again.';
          console.log('error >>>> ' + error);
      });
      
  }
  
  public close() {
      this.activeModal.close(this.loginForm.value);
      return true;
  }
  
  public dismiss() {
      this.activeModal.dismiss();
  }
}


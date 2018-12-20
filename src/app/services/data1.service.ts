import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { prodEnvironment } from '../../environments/environment.prod';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {
  apiUrl: any;

  constructor(public http: HttpClient, public serviceUrl: any) {
      if(window.location.origin== 'http://localhost:4000' || window.location.origin== 'http://localhost:4200'){
          this.apiUrl = environment.apiUrl + this.serviceUrl;
      }else{
          this.apiUrl = prodEnvironment.apiUrl + this.serviceUrl;
      }
      console.log('Data1Service this.apiUrl : ' + this.apiUrl);
  }
  
  post(formData) {
      return this.http.post(this.apiUrl, formData).map(res => {
        return res;
      });
    }

  get() {
    return this.http.get(this.apiUrl).map(res => {
      return res;
    });
  }

  put(formData) {
    return this.http.put(this.apiUrl + formData.id, formData).map(res => {
        return res;
    });
  }

  delete(id) {
    return this.http.delete(this.apiUrl+id).map(res => {
        return res;
    });
  }
}

import { Injectable } from '@angular/core';
import { RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { prodEnvironment } from '../../environments/environment.prod';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  env: any;
  apiUrl: any;

  constructor(private http: HttpClient) {
      console.log('window.location.origin' + window.location.origin);
      if(window.location.origin== 'http://localhost:4000' || window.location.origin== 'http://localhost:4200'){
          this.apiUrl = environment.apiUrl;
      }else{
          this.apiUrl = prodEnvironment.apiUrl;
      }
      console.log('this.apiUrl : ' + this.apiUrl);
  }
  
  post(uri, formData) {
      console.log('DataService url ' + formData.id)
      return this.http.post(this.apiUrl + uri, formData).map(res => {
        console.log('res ' + res);
        return res;
      });
    }

  get(uri, populate) {
    var params = new HttpParams()
        .set("populate",populate);
        
    var localUri = this.apiUrl + uri;
    return this.http.get(localUri).map(res => {
      return res;
    });
  }
    
  findOne(uri, id, populate) {   
    var params = new HttpParams()
        .set("populate",populate);
      
    var localUri = this.apiUrl + uri;
    return this.http.get(localUri + id, { params }).map(res => {
      return res;
    });
  }   

  put(uri,formData) {
    var localUri = this.apiUrl + uri;
    return this.http.put(localUri + formData.id, formData).map(res => {
        return res;
    });
  }

  delete(uri) {
    return this.http.delete(this.apiUrl + uri).map(res => {
        return res;
    });
  }
}

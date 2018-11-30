import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { prodEnvironment } from '../../environments/environment.prod';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  env: any;
  apiUrl: any;

  constructor(private http: HttpClient) {
      console.log('window.location.origin' + window.location.origin);
      if(window.location.origin== 'http://localhost:4000'){
          this.apiUrl = environment.apiUrl;
      }else{
          this.apiUrl = prodEnvironment.apiUrl;
      }
      console.log('this.apiUrl : ' + this.apiUrl);
  }

  create(uri, formData) {
    return this.http.post(this.apiUrl + uri, formData).map(res => {
      return res;
    });
  }

  get(uri) {
    return this.http.get(this.apiUrl + uri).map(res => {
      return res;
    });
  }

  edit(uri) {
    return this.http.get(this.apiUrl + uri).map(res => {
      return res;
    });
  }

  update(uri,formData) {
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

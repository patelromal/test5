import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  // = '/api/students/';
  // private http: HttpClient;
  // private uri: any;
  constructor(private http: HttpClient) {}

  create(uri, formData) {
    return this.http.post(uri, formData).map(res => {
      return res;
    });
  }

  get(uri) {
    return this.http.get(uri).map(res => {
      return res;
    });
  }

  edit(uri) {
    return this.http.get(uri).map(res => {
      return res;
    });
  }

  update(uri,formData) {
    return this.http.put(uri + formData.id, formData).map(res => {
        return res;
    });
  }

  delete(uri) {
    return this.http.delete(uri).map(res => {
        return res;
    });
  }
}

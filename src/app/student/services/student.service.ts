import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../common/services/data.service';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  result: any;
  uri: any;
  constructor(private http: HttpClient, 
              private dataService: DataService) {
    this.uri = 'https://vast-springs-98239.herokuapp.com/api/students/';
    // dataService = new DataService(); 
  }

  create(formData) {
    return this.dataService.create(this.uri,formData);
    // return this.http.post(this.uri, formData).map(res => {
    //   return res;
    // });
  }

  get() {
    console.log('call api students service ------- ' + this.uri);
    return this.dataService.get(this.uri);
    // return this.http.get(this.uri+'students').map(res => {
    //   return res;
    // });
  }

  edit(id) {
    return this.dataService.get(this.uri+ id).map(res => {
      return res;
    });
  }

  update(formData) {
    return this.dataService.update(this.uri,formData).map(res => {
        return res;
    });
  }

  delete(id) {
    return this.dataService.delete(this.uri+id).map(res => {
        return res;
    });
  }
}

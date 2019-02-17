import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class SubcourseService{
  
  result: any;
  uri: any;

  constructor(private dataService: DataService) {
    this.uri = 'subcourses/';
  }

  create(formData) {
    return this.dataService.post(this.uri,formData).map(res => {
      return res;
    });
  }

  get() { 
    return this.dataService.get(this.uri, 'course');
  }

  findOne(id) {
    return this.dataService.findOne(this.uri, id, 'course');
  }  

  edit(id) {
    return this.dataService.get(this.uri, id).map(res => {
      return res;
    });
  }

  update(formData) {
    return this.dataService.put(this.uri,formData).map(res => {
        return res;
    });
  }

  delete(id) {
    return this.dataService.delete(this.uri+id).map(res => {
        return res;
    });
  }
}

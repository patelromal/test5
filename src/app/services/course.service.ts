import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import 'rxjs/add/operator/map';


@Injectable()
export class CourseService {

  result: any;
  uri: any;
  constructor(private dataService: DataService) {
      this.uri = 'courses/';
  }

  create(formData) {
    return this.dataService.create(this.uri,formData);
  }

  get() {
    console.log('call api course service > ' + this.uri);
    return this.dataService.get(this.uri);
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

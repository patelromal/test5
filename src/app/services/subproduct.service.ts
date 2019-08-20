import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import 'rxjs/add/operator/map';

@Injectable()
export class SubproductService{
  
  result: any;
  uri: any;

  constructor(private dataService: DataService) {
    this.uri = 'subproducts/';
  }

  create(formData) {
    return this.dataService.post(this.uri,formData).map(res => {
      return res;
    });
  }

  get() { 
    return this.dataService.get(this.uri, 'product');
  }

  findOne(id) {
    return this.dataService.findOne(this.uri, id, 'product');
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

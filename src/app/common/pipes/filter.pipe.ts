import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], term): any {
      console.log('items : ' + items);
        return term ? items.filter(item => item.course.indexOf(term) !== -1) : items;
    }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], term): any {
        return term ? items.filter(item => item.course._id.indexOf(term) !== -1) : items;
    }
}

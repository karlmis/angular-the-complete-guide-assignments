import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (Array.isArray(value)) {
      return value.slice().sort((a, b) => {
         return a.name.length - b.name.length;
      });
    }
    return [];
  }

}

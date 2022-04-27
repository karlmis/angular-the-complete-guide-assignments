import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value === 'string') {
      return (<string>value).split('').reverse().join('');
    }
    return '';
  }

}

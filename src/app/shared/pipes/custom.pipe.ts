import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    return value.length > args[0] ? value.slice(0, args) + '...' : value;
    
  }

}

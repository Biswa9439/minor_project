import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): number {
    const currentYear = new Date().getFullYear();
    const dob = new Date(value).getFullYear();
    return currentYear - dob;
  }

}

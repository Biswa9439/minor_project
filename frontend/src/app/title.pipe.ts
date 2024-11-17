import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(name: any, gender: any): unknown {
    if(gender == 'male'){
      return `Mr. ${name}`
    }
    else if(gender == 'female'){
      return `Mrs. ${name}`
    }
    else{
      return `${name}`;
    }
  }

}

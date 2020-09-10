import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'porcentaje'
})
export class PorcentajePipe implements PipeTransform {

  transform(value: string): string {
    let result :string;
    result = value + "%";
    
    return result;
  }

}



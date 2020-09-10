import { Pipe, PipeTransform } from '@angular/core';
import { Temperatura } from '../models/ciudad';

@Pipe({
  name: 'grados'
})
export class GradosPipe implements PipeTransform {

  transform(temp: Temperatura): string {
    let value : string;
    if (temp.unidad === "Celsius"){
       value = ((temp.valor *(9/5)) +32) + " Fahrenheit"
    }
    else {value= ((temp.valor -32)* (5/9)) + " Celsius"}

    return value;
  }

}

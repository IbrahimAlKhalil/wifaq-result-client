import {Pipe, PipeTransform} from '@angular/core';
import {enToBnNumber} from '../helpers';

@Pipe({
  name: 'toBn'
})
export class ToBnPipe implements PipeTransform {

  transform(value: string | number): any {
    return enToBnNumber(value);
  }

}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'totalMark'
})
export class TotalMarkPipe implements PipeTransform {

  transform(marks: number[]): number {
    return marks.reduce((a, b) => a + b);
  }

}

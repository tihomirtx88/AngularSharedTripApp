import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorted'
})
export class ShortedPipe implements PipeTransform {

  transform(value: string, maxCount: 10): unknown {
    return `${value.substring(0, maxCount)}${value.length > maxCount ? `...` : ``}`;
  }

}

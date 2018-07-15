import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bnkSuffix'
})
export class BnkSuffixPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.toUpperCase() + '/BNK48';
  }

}

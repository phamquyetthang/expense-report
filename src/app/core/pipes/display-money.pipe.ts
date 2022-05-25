import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayMoney',
})
export class DisplayMoneyPipe implements PipeTransform {
  transform(value: number): string {
    return (value * 1000)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') + ' VND';
  }
}

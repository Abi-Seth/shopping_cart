import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number) {
    const price = value.toString().split("");
    let finalPrice = [...price.slice(0, price.length-2), '.', ...price.slice(price.length-2, price.length)];
    return (parseFloat(finalPrice.join(""))).toFixed(2);
  }

}

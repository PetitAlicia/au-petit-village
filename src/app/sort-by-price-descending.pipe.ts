import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPriceDescending',
  standalone: true
})
export class SortByPriceDescendingPipe implements PipeTransform {

  transform(product: any[]): any[] {
    return product.sort((a:any,b:any) => {
      if(a.price < b.price) {return 1;}
      else if(a.price > b.price) {return -1;}
      else return 0;
    })
  }

}

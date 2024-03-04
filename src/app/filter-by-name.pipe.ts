import { Pipe, PipeTransform } from '@angular/core';
import { ProductsService } from './products.service';

@Pipe({
  name: 'filterByName',
  standalone: true
})
export class FilterByNamePipe implements PipeTransform {

  product: any[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.product = this.productsService.product
  }

  transform(text: string): any {
    if (!text) {
      this.product = this.product;
      return;
    }
  
    this.product = this.product.filter(
      product => product?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

}

import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SortByPricePipe } from '../sort-by-price.pipe';
import { SortByPriceDescendingPipe } from '../sort-by-price-descending.pipe';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products.service';
import { OnInit } from '@angular/core';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SortByPricePipe, SortByPriceDescendingPipe, CommonModule, FilterByNamePipe, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  product: any[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.product = this.productsService.product
  }

  sortByPrice() {
    return this.product.sort((a:any,b:any) => {
      if(a.price < b.price) {return -1;}
      else if(a.price > b.price) {return 1;}
      else return 0;
    })
  }

  sortByPriceDescending() {
    return this.product.sort((a:any,b:any) => {
      if(a.price < b.price) {return 1;}
      else if(a.price > b.price) {return -1;}
      else return 0;
    })
  }

  filterByName(text: string) {
    if (!text) {
      this.product = this.product;
      return;
    }
  
    this.product = this.product.filter(
      product => product?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

}


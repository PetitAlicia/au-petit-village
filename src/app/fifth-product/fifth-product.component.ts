import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-fifth-product',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './fifth-product.component.html',
  styleUrl: './fifth-product.component.css'
})
export class FifthProductComponent {

}

import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sixth-product',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './sixth-product.component.html',
  styleUrl: './sixth-product.component.css'
})
export class SixthProductComponent {

}

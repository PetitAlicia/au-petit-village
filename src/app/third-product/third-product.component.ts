import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-third-product',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './third-product.component.html',
  styleUrl: './third-product.component.css'
})
export class ThirdProductComponent {

}

import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-second-product',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './second-product.component.html',
  styleUrl: './second-product.component.css'
})
export class SecondProductComponent {

}

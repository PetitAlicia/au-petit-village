import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-fourth-product',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './fourth-product.component.html',
  styleUrl: './fourth-product.component.css'
})
export class FourthProductComponent {

}

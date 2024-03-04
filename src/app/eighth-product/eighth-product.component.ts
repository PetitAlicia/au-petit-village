import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-eighth-product',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './eighth-product.component.html',
  styleUrl: './eighth-product.component.css'
})
export class EighthProductComponent {

}

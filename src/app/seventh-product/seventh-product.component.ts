import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-seventh-product',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './seventh-product.component.html',
  styleUrl: './seventh-product.component.css'
})
export class SeventhProductComponent {

}

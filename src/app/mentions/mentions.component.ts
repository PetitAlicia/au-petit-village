import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-mentions',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './mentions.component.html',
  styleUrl: './mentions.component.css'
})
export class MentionsComponent {

}

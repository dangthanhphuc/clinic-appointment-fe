import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterOutlet } from '@angular/router';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hompage-container',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    FontAwesomeModule,
    RouterOutlet
  ],
  templateUrl: './homepage-container.component.html',
  styleUrl: './homepage-container.component.scss'
})
export class HomepageContainerComponent {

}

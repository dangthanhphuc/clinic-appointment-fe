import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faFacebook, faXTwitter, faYoutube, faLinkedin} from '@fortawesome/free-brands-svg-icons';
 
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  faFacebook = faFacebook;
  faXTwitter = faXTwitter;
  faYoutube = faYoutube;
  faLinkedin = faLinkedin;
}

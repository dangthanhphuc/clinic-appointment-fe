import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faUserDoctor, faHospital, faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import { BannerComponent } from '../banner/banner.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-make-appointment',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    FontAwesomeModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    FontAwesomeModule
  ],
  templateUrl: './make-appointment.component.html',
  styleUrl: './make-appointment.component.scss'
})
export class MakeAppointmentComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faUserDoctor = faUserDoctor;
  faHospital = faHospital;
  faClinicMedical = faClinicMedical;
}

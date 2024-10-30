import { Component, input } from '@angular/core';
import { DoctorResponse } from '../../responses/doctor.response';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-doctor-item',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './doctor-item.component.html',
  styleUrl: './doctor-item.component.scss'
})
export class DoctorItemComponent {
  doctor = input.required<DoctorResponse>();
}

import { Component, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';
import { DoctorResponse } from '../../responses/doctor.response';
import { ResponseObject } from '../../responses/api.response';
import { environment } from '../../../environments/environment';
import { WorkingDateComponent } from "../working-date/working-date.component";

@Component({
  selector: 'app-doctor-detail',
  standalone: true,
  imports: [
    RouterLink,
    WorkingDateComponent
],
  templateUrl: './doctor-detail.component.html',
  styleUrl: './doctor-detail.component.scss'
})
export class DoctorDetailComponent implements OnInit{

  
  // Data
  apiBaseGetImage : string = environment.apiBaseGetImage;
  doctorId = input.required<number>();
  doctor?: DoctorResponse;

  constructor(
    private doctorService : DoctorService
  ) {

  }

  ngOnInit(): void {
    this.getDoctorById(this.doctorId());
  }

  getDoctorById(doctorId : number) {
    this.doctorService.doctor$(doctorId).subscribe({
      next: (response : ResponseObject<DoctorResponse>) => {
        this.doctor = response.data;
      },
      error: (error) => {
        debugger
        console.log(error);
      }
    })
  }

}

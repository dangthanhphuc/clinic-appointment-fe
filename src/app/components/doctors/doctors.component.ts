import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { SpecialtyService } from '../../services/specialty.service';
import { DoctorResponse } from '../../responses/doctor.response';
import { ResponseObject } from '../../responses/api.response';
import { DoctorItemComponent } from "../doctor-item/doctor-item.component";

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [DoctorItemComponent],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss'
})
export class DoctorsComponent implements OnInit{

  // Data
  doctors!: DoctorResponse[];

  constructor(
    private doctorService : DoctorService,
    private specialtyService : SpecialtyService
  ) {}
  
  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors() : void {
    this.doctorService.doctors$.subscribe({
      next: (response : ResponseObject<DoctorResponse[]>) => {
        this.doctors = response.data;
      },
      error: (error : any) => {
        console.log(error);
      }
    })
  }
}

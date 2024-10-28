import { Component } from '@angular/core';
import { LocationService } from '../../../services/location.service';
import { LocationResponse } from '../../../responses/location.response';
import { PaginationComponent } from '../../pagination/pagination.component';

@Component({
  selector: 'app-make-clinics-appointment',
  standalone: true,
  imports: [
    PaginationComponent
  ],
  templateUrl: './make-clinics-appointment.component.html',
  styleUrl: './make-clinics-appointment.component.scss'
})
export class MakeClinicsAppointmentComponent {
  pageSize = 10;

  clinics: LocationResponse[] = [];
  visibleClinics : LocationResponse[] = [];

  public onPageChange(page: number): void {
    const startIndex = (page - 1) * this.pageSize;
    const items : LocationResponse[] = this.clinics.slice(
      startIndex,
      startIndex + this.pageSize
    );
    this.visibleClinics = items;
  }

  constructor(
    private locationService : LocationService
  ){}

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations() : void {
    this.locationService.locations$.subscribe({
      next: (result : {hospitals: LocationResponse[], clinics: LocationResponse[]}) => {
        this.clinics = result.clinics;
        this.visibleClinics = this.clinics.slice(0, this.pageSize - 1);
      },
      error: (error : any) => {
        console.log(error);
      }
    })
  }
}

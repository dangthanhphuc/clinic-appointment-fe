import { Component, OnInit } from '@angular/core';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { LocationService } from '../../../services/location.service';
import { LocationResponse } from '../../../responses/location.response';
import { PaginationComponent } from '../../pagination/pagination.component';

@Component({
  selector: 'app-make-hospitals-appointment',
  standalone: true,
  imports: [
    PaginationComponent
  ],
  templateUrl: './make-hospitals-appointment.component.html',
  styleUrl: './make-hospitals-appointment.component.scss'
})
export class MakeHospitalsAppointmentComponent implements OnInit {

  pageSize = 10;

  hospitals: LocationResponse[] = [];
  visibleHospitals : LocationResponse[] = [];

  public onPageChange(page: number): void {
    const startIndex = (page - 1) * this.pageSize;
    const items : LocationResponse[] = this.hospitals.slice(
      startIndex,
      startIndex + this.pageSize
    );
    this.visibleHospitals = items;
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
        debugger
        this.hospitals = result.hospitals;
        this.visibleHospitals = this.hospitals.slice(0, this.pageSize - 1);
      },
      error: (error : any) => {
        console.log(error);
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { LocationResponse } from '../../responses/location.response';

@Component({
  selector: 'app-clinics',
  standalone: true,
  imports: [],
  templateUrl: './clinics.component.html',
  styleUrl: './clinics.component.scss'
})
export class ClinicsComponent implements OnInit{

  // clinics: LocationResponse[] = [];
  // visibleClinics : LocationResponse[] = [];

  // constructor(private locationService : LocationService){}
  
  ngOnInit(): void {
    // this.getLocations();
  }

  // getLocations() : void {
  //   this.locationService.locations$.subscribe({
  //     next: (result : {hospitals: LocationResponse[], clinics: LocationResponse[]}) => {
  //       this.clinics = result.clinics;
  //       this.visibleClinics = this.clinics.slice(0, this.pageSize - 1);
  //     },
  //     error: (error : any) => {
  //       console.log(error);
  //     }
  //   })
  // }

}

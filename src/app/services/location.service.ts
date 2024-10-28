import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ResponseObject } from '../responses/api.response';
import { MedicalFacilityType } from '../enums/facility-type';
import { LocationResponse } from '../responses/location.response';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private readonly apiBaseUrl = `${environment.apiBaseUrl}/locations`;

  constructor(
    private http : HttpClient
  ) { }

  locations$ = <Observable<{hospitals: LocationResponse[], clinics: LocationResponse[]}>> this.http.get<ResponseObject>(`${this.apiBaseUrl}`)
  .pipe(
    map( (response : ResponseObject) => {
      const hospitals : LocationResponse[] = [];
      const clinics : LocationResponse[] = [];
      response.data.forEach((location : LocationResponse) => {
        if(location.medical_facility.type === MedicalFacilityType.HOSPITAL)
          hospitals.push(location);
        else if(location.medical_facility.type === MedicalFacilityType.CLINIC)
          clinics.push(location);
      });
      return {hospitals, clinics };
    }),
    catchError(this.handleError)
  );

  handleError(error : HttpErrorResponse) : Observable<never> {
    console.log(error);
    return throwError(`An error occurred: ${error.message}`);
  }
}

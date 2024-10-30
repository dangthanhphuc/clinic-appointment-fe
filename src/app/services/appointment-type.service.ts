import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ResponseObject } from '../responses/api.response';
import { AppointmentTypeResponse } from '../responses/appointment-type.response';

@Injectable({
  providedIn: 'root'
})
export class AppointmentTypeService {

  private readonly apiBaseUrl: string = `${environment.apiBaseUrl}/appointment-types`;

  constructor(
    private http : HttpClient
  ) { }

  appointmentTypes$ = () : Observable<ResponseObject<AppointmentTypeResponse[]>> => {
    return this.http.get<ResponseObject<AppointmentTypeResponse[]>>(`${this.apiBaseUrl}`);
  }
}

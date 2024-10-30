import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ResponseObject } from '../responses/api.response';
import { CreateAppointmentDTO } from '../dtos/create-appointment.dto';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private readonly apiBaseUrl: string = `${environment.apiBaseUrl}/appointments`;

  constructor(
    private http : HttpClient
  ) { }

  create$ = (appointment : CreateAppointmentDTO) : Observable<ResponseObject<any>> => {
    return this.http.post<ResponseObject<any>>(`${this.apiBaseUrl}`, appointment);
  } 
  
}

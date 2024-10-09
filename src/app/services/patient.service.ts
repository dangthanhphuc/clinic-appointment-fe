import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ResponseObject } from '../responses/api.response';
import { RegisterPatientDTO } from '../dtos/register-patient.dto';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private readonly apiBaseUrl : string = `${environment.apiBaseUrl}/patients`;

  constructor(private http : HttpClient) { }

  register$ = (registerPatientDTO : RegisterPatientDTO) : Observable<ResponseObject> => {
    return this.http.post<ResponseObject>(`${this.apiBaseUrl}/register`, registerPatientDTO);
  }
}

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../responses/user.response';
import { Observable } from 'rxjs';
import { ResponseObject } from '../responses/api.response';
import { LoginDTO } from '../dtos/login.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiBaseUrl : string = `${environment.apiBaseUrl}/users`;

  constructor(private http : HttpClient) { }

  login$ = (loginDTO: LoginDTO) : Observable<ResponseObject> => {
    return this.http.post<ResponseObject>(`${this.apiBaseUrl}/login`, loginDTO);
  }
  
}

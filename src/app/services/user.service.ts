import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserResponse } from '../responses/user.response';
import { BehaviorSubject, Observable } from 'rxjs';
import { ResponseObject } from '../responses/api.response';
import { LoginDTO } from '../dtos/login.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userDetailSubject = new BehaviorSubject<any>(null);
  userDetail$ = this.userDetailSubject.asObservable();

  updatesUserDetail(data: any) {
    this.userDetailSubject.next(data);
  }

  private readonly apiBaseUrl : string = `${environment.apiBaseUrl}/users`;

  constructor(private http : HttpClient) { }

  login$ = (loginDTO: LoginDTO) : Observable<ResponseObject> => {
    return this.http.post<ResponseObject>(`${this.apiBaseUrl}/login`, loginDTO);
  }

  getUserDetails$ = (userType : string) : Observable<ResponseObject> => {
    return this.http.get<ResponseObject>(`${this.apiBaseUrl}/details/${userType}`);
  }
  
}

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserResponse } from '../responses/user.response';
import { BehaviorSubject, Observable } from 'rxjs';
import { ResponseObject } from '../responses/api.response';
import { LoginDTO } from '../dtos/login.dto';
import { LoginResponse } from '../responses/login.response';

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

  login$ = (loginDTO: LoginDTO) : Observable<ResponseObject<LoginResponse>> => {
    return this.http.post<ResponseObject<LoginResponse>>(`${this.apiBaseUrl}/login`, loginDTO);
  }

  getUserDetails$ = (userType : string) : Observable<ResponseObject<any>> => {
    return this.http.get<ResponseObject<any>>(`${this.apiBaseUrl}/details/${userType}`);
  }
  
}

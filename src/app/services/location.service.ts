import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { ResponseObject } from '../responses/api.response';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private readonly apiBaseUrl = `${environment.apiBaseUrl}/locations`;

  constructor(
    private http : HttpClient
  ) { }

  locations$ = <Observable<ResponseObject>> this.http.get<ResponseObject>(`${this.apiBaseUrl}`)
  .pipe(
    catchError(this.handleError)
  );

  handleError(error : HttpErrorResponse) : Observable<never> {
    console.log(error);
    return throwError(`An error occurred: ${error.message}`);
  }
}

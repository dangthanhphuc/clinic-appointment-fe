import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { ResponseObject } from "../responses/api.response";
import { DoctorResponse } from "../responses/doctor.response";

@Injectable({
    providedIn: 'root'
})
export class DoctorService {

    private readonly apiBaseUrl: string = `${environment.apiBaseUrl}/doctors`;

    constructor(
        private http : HttpClient
    ){}


    doctors$ = <Observable<ResponseObject<DoctorResponse[]>>> this.http.get<ResponseObject<DoctorResponse[]>>(`${this.apiBaseUrl}`)
    .pipe(
        catchError(this.handleError)
    );

    doctor$ = (doctorId : number) : Observable<ResponseObject<DoctorResponse>> => { 
        return this.http.get<ResponseObject<DoctorResponse>>(`${this.apiBaseUrl}/${doctorId}`)
    }
 
    handleError(error : HttpErrorResponse) : Observable<never> {
        console.log(error);
        return throwError(`An error occurred: ${error.message}`);
      }
}
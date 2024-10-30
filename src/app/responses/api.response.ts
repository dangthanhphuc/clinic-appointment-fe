import { HttpStatusCode } from "@angular/common/http";

export interface ResponseObject<T> {
    timeStamp : Date;
    status : HttpStatusCode;
    statusCode : number;
    message : string;
    data : T;
}
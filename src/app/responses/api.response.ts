import { HttpStatusCode } from "@angular/common/http";

export interface ResponseObject {
    timeStamp : Date;
    status : HttpStatusCode;
    statusCode : number;
    message : string;
    data : any;
}
import { HttpStatusCode } from "@angular/common/http";

export interface ResponseObject {
    timeStamp : Date;
    statusCode : string;
    status : HttpStatusCode;
    message : string;
    data : any;
}
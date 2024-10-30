import { AppointmentStatus } from "../enums/appointment-type";
import { AppointmentTypeResponse } from "./appointment-type.response";

export class AppointmentResponse {
    id : number;
    start_time : Date;
    end_time: Date;
    status : AppointmentStatus;
    type : AppointmentTypeResponse;
    note : string;
    price : number;
    patient : any;

    constructor(data : any) {
        this.id = data.id;
        this.start_time = new Date(data.start_time);
        this.end_time = new Date(data.end_time);
        this.status = data.status;
        this.type = new AppointmentTypeResponse(data.type);
        this.note = data.note;
        this.price = data.price;
        this.patient = data.patient; 
    }
    
}
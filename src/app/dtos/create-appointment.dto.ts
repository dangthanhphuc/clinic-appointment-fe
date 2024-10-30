export class CreateAppointmentDTO {
    patient_id : number;
    doctor_id : number;
    appointment_type_id : number;
    start_time: Date;
    end_time: Date;
    note?: string;

    constructor(data : any) {
        this.patient_id = data.patient_id;
        this.doctor_id = data.doctor_id;
        this.appointment_type_id = data.appointment_type_id;
        this.start_time = data.start_time;
        this.end_time = data.end_time;
        
    }
}
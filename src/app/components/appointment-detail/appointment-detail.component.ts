import { Component, input, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { ResponseObject } from '../../responses/api.response';
import { DoctorResponse } from '../../responses/doctor.response';
import { UserResponse } from '../../responses/user.response';
import { LocalStorageService } from '../../services/local-storage.service';
import { WorkingDateComponent } from "../working-date/working-date.component";
import { environment } from '../../../environments/environment';
import { AppointmentService } from '../../services/appointment.service';
import { CreateAppointmentDTO } from '../../dtos/create-appointment.dto';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { AppointmentTypeService } from '../../services/appointment-type.service';
import { AppointmentTypeResponse } from '../../responses/appointment-type.response';

@Component({
  selector: 'app-appointment-detail',
  standalone: true,
  imports: [
    WorkingDateComponent,
    CommonModule,
    FormsModule
  ],
  templateUrl: './appointment-detail.component.html',
  styleUrl: './appointment-detail.component.scss'
})
export class AppointmentDetailComponent implements OnInit {
  
  doctorId = input.required<number>();
  isDateOpen = false;
  isPatientProfileOpen = false;
  selectedAppointmentType: number = 0;

  date: Date;
  timeStart: Date | null = null;
  timeEnd: Date | null = null;
  additionalInfo : string = "";

  doctor?: any;
  patient : any;
  appointmentTypes : AppointmentTypeResponse[] = [];

  apiBaseGetImage : string = environment.apiBaseGetImage;

  constructor(
    private doctorService : DoctorService ,
    private localStorageService : LocalStorageService ,
    private appointmentService : AppointmentService,
    private router : Router,
    private toastService : ToastService,
    private appointmentTypeService : AppointmentTypeService
  ){
    this.patient = this.localStorageService.get("user");
    this.date = new Date();
  }

  ngOnInit(): void {
    this.getAppointmentTypes();
    this.getDoctorById(this.doctorId());
  }

  onSubmit() {
    if(!this.isInvalid() && this.timeStart && this.timeEnd) {
      debugger
      const createAppointmentDTO : CreateAppointmentDTO = {
        patient_id : this.patient.userResponse.id,
        doctor_id : this.doctor.user.id,
        appointment_type_id : this.selectedAppointmentType,
        start_time: this.timeStart,
        end_time: this.timeEnd,
        note: this.additionalInfo
      };
      this.createAppointment(createAppointmentDTO);
    }
  }

  getAppointmentTypes() {
    this.appointmentTypeService.appointmentTypes$().subscribe({
      next: (response : ResponseObject<any>) => {
        this.appointmentTypes = response.data;
      },
      error: (error) => {
        debugger
        console.log(error);
      }
    });
  }

  createAppointment(createAppointmentDTO : CreateAppointmentDTO) {
    this.appointmentService.create$(createAppointmentDTO).subscribe({
      next: (response : ResponseObject<any>) => {
        this.toastService.showToast("Success", "Appointment has been made successfully!", "success");
        this.router.navigate(['/homepage']);
      },
      error: (error) => {
        this.toastService.showToast("Error", "Appointment has been made error!", "error");
        console.log(error);
      }
    });
  }

  isInvalid() : boolean {
    if(this.timeStart != null && this.timeEnd != null && this.selectedAppointmentType != 0)
      return false;
    return true;
  }

  eventDateTimeChange(event : {date: Date, timeStart: Date | null, timeEnd: Date | null}) {
    this.date = event.date;
    if (event.timeStart && event.timeEnd) {
      this.timeStart = new Date(
        this.date.getFullYear(),
        this.date.getMonth(),
        this.date.getDate(),
        event.timeStart.getHours(),
        event.timeStart.getMinutes(),
        event.timeStart.getSeconds()
      );

      this.timeEnd = new Date(
        this.date.getFullYear(),
        this.date.getMonth(),
        this.date.getDate(),
        event.timeEnd.getHours(),
        event.timeEnd.getMinutes(),
        event.timeEnd.getSeconds()
      );
    } else {
      this.timeStart = null;
      this.timeEnd = null;
    }
  }

  getDoctorById(doctorId : number) {
    this.doctorService.doctor$(doctorId).subscribe({
      next: (response : ResponseObject<DoctorResponse>) => {
        this.doctor = response.data;
      },
      error: (error) => {
        debugger
        console.log(error);
      }
    })
  }
}

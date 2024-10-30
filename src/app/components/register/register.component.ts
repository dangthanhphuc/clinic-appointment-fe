import { Component, DoCheck, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { passwordMatchValidator } from '../../utils/validators.util';
import { PatientService } from '../../services/patient.service';
import { RegisterPatientDTO } from '../../dtos/register-patient.dto';
import { ResponseObject } from '../../responses/api.response';
import { HttpStatusCode } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private router : Router,
    private toastService : ToastService,
    private fb: FormBuilder,
    private patientService : PatientService
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6)],
      retype_password : ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.email],
      address: [''], 
      phoneNumber: [''],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required]
    },  {validators : passwordMatchValidator()});
  }

  ngOnInit(): void {
    
  }

  getFieldError(fieldName : string) : string {
    const control = this.registerForm.get(fieldName);
    if(control && control.touched && control.invalid) {
      if(control.errors?.['required']) {
        return 'Trường này là bắt buộc';
      }
      if(control.errors?.['email']) {
        return 'Email không hợp lệ';
      }
      if(control.errors?.['minlength']) {
        return 'Mật khẩu phải ít nhất 6 ký tự';
      }
    }
    return '';
  }

  onSubmit(): void {
    const registerPatientDTO : RegisterPatientDTO = new RegisterPatientDTO(this.registerForm.value);
    this.patientService.register$(registerPatientDTO).subscribe({
      next: (response : ResponseObject<any>) => {
        debugger
        if(response.statusCode === HttpStatusCode.Ok) {
          debugger
          this.toastService.showToast("Thành công","Đăng ký thành công", "success");
          this.router.navigate(['/login']);
        } 
      },
      error: (error) => {
        this.toastService.showToast("Lỗi", error.error.message, 'error');
      }
    });
  }
  
}

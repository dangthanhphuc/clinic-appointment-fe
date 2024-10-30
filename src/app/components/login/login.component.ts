import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginDTO } from '../../dtos/login.dto';
import { UserService } from '../../services/user.service';
import { HttpStatusCode } from '@angular/common/http';
import { ResponseObject } from '../../responses/api.response';
import { ToastService } from '../../services/toast.service';
import { TokenService } from '../../services/token.service';
import { switchMap } from 'rxjs';
import { LocalStorageService } from '../../services/local-storage.service';
import { CommonModule } from '@angular/common';
import { LoginResponse } from '../../responses/login.response';
import { UserResponse } from '../../responses/user.response';
import { DoctorResponse } from '../../responses/doctor.response';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private toastService : ToastService,
    private tokenService : TokenService,
    private localStorageService : LocalStorageService,
    private router : Router,
    private fb: FormBuilder, 
    private userService : UserService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      userType: ['', [Validators.required]],
      rememberPassword: [false]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const loginDTO : LoginDTO = new LoginDTO(this.loginForm.value);
    if (this.loginForm.valid) {
      this.login(loginDTO);
    }
  }

  getFieldError(fieldName : string) : string {
    const control = this.loginForm.get(fieldName);
    if(control && control.touched && control.invalid) {
      if(control.errors?.['required']) {
        return 'Trường này là bắt buộc';
      }
      if(control.errors?.['minlength']) {
        return 'Mật khẩu phải ít nhất 6 ký tự';
      }
    }
    return '';
  }

  login(loginDTO : LoginDTO) : void {
    this.userService.login$(loginDTO).pipe(
      switchMap((response : ResponseObject<LoginResponse>) => {
         if(response.statusCode == HttpStatusCode.Ok) {
          this.tokenService.setToken(response.data.token);
          // Gọi aip để lấy thông tin chi tiết user thông qua user id
          return this.userService.getUserDetails$(loginDTO.user_type);
        } else {
          throw new Error('Login failed');
        }
      })
    ).subscribe({
      next: (response : ResponseObject<any>) => {
        debugger
        this.localStorageService.save("user", response.data);
        this.userService.updatesUserDetail(response.data);
        this.toastService.showToast("Thành công", "Đăng nhập thành công", "success");
        this.router.navigate(['/homepage']);
      },
      error: (error : any) => {
        this.toastService.showToast("Lỗi", error.error.message, 'error');
      }
    })
  }
  


  forgotPassword(): void {
    console.log('Forgot password clicked');
  }

}

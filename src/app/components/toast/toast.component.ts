import { Component, OnInit } from '@angular/core';
import { Toast, ToastService } from '../../services/toast.service';
import { CommonModule } from '@angular/common';
import { faCircleInfo, faCheckCircle, faCircleExclamation, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent implements OnInit {

  faCircleInfo = faCircleInfo;
  faCheckCircle = faCheckCircle;
  faCircleExclamation = faCircleExclamation;

  toasts: Toast[] = [];

  constructor(private toastService : ToastService) { }

  ngOnInit(): void {
    this.toastService.toasts.subscribe(toasts => {
      this.toasts = toasts;
    });
  }

  getIconForToastType(type: string): IconDefinition {
    switch (type) {
      case 'success':
        return faCheckCircle;
      case 'error':
        return faCircleExclamation;
      case 'warning':
        return faCircleExclamation;
      case 'info':
        return faCircleInfo;
      default:
        return faCircleExclamation; // Default icon
    }
  }

  

}

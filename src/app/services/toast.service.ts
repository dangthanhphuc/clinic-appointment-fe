import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toasts$ = new BehaviorSubject<Toast[]>([]);

  showToast(title : string, message : string, type : 'success' | 'error' | 'warning' | 'info') : void {
    const toast : Toast = {title ,message, type };
    this.toasts$.next([...this.toasts$.value, toast]);

    setTimeout(() => {
      this.removeToast(toast);
    }, 3000);
  } 

  private removeToast(toastToRemove : Toast) : void {
    const toastsKept = this.toasts$.value.filter(toast => toast !== toastToRemove);
    this.toasts$.next(toastsKept);
  }
  
  get toasts() : Observable<Toast[]> {
    return this.toasts$.asObservable();
  }

}

export interface Toast {
  title: string;
  message : string;
  type : 'success' | 'error' | 'warning' | 'info';
}
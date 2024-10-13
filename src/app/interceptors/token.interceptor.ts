import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

export function tokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  // debugger
  const token = inject(TokenService).getToken();
  if(token) {
    const reqWithHeader = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next(reqWithHeader);
  }

  return next(req);
}
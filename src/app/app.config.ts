import { ApplicationConfig, Provider, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './interceptors/token.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding(), 
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      })
    ),
    provideClientHydration(),
    provideHttpClient(
      withFetch(),
      withInterceptors([tokenInterceptor])
    )
  ]
};

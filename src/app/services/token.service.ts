import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private tokenKey = "auth_token";

  constructor(private localStorageService : LocalStorageService) {}

  setToken(token : string) : void {
    this.localStorageService.save(this.tokenKey, token);
  }

  getToken() : string | null {
    return this.localStorageService.get(this.tokenKey);
  }

  removeToken() : void {
    this.localStorageService.remove(this.tokenKey);
  }

}

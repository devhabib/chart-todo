import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;

  constructor() { }

  setAuthenticated(status: boolean) {
    this.authenticated = status;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}

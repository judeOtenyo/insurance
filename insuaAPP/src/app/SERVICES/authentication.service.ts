import { Injectable } from '@angular/core';
import { User } from '../CLASSES/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}
  saveUser(credentials) {
    localStorage.setItem('userId', credentials.user._id);
    localStorage.setItem('token', credentials.token);
    localStorage.setItem('name', credentials.user.name);
    localStorage.setItem('type', credentials.user.type);
    localStorage.setItem('status', credentials.user.status);
    localStorage.setItem('credentials', JSON.stringify(credentials));
    return true;
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('userId') === null) {
      return false;
    }
    return true;
  }

  getToken() {
    if (this.isLoggedIn()) {
      return localStorage.getItem('token');
    } else {
      return false;
    }
  }

  getName() {
    if (this.isLoggedIn()) {
      return localStorage.getItem('name');
    } else {
      return false;
    }
  }

  getCredentials(): User {
    if (this.isLoggedIn()) {
      const user = localStorage.getItem('credentials');
      return JSON.parse(user);
    } else {
      return new User();
    }
  }

  clearSession() {
    localStorage.clear();
  }
}

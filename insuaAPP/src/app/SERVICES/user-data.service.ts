import { Injectable } from '@angular/core';
import { User, UserDetails } from '../CLASSES/user';
import { Router } from '@angular/router';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  isLoggedIn = false;
  constructor(private router: Router, private requestService: RequestService) {}
  userData: UserDetails[] = [
    {
      name: 'The Administrator',
      phone: '0712345678',
      email: 'admin@insua.com',
      type: 'Admin',
      password: 'tttttttt',
    },
    {
      name: 'Test User',
      phone: '0712619962',
      email: 'judeotenyo@gmail.com',
      password: 'tttttttt',
      type: 'User',
    },
  ];
  getAllUsers() {
    return this.userData;
  }

  newUser = (user: UserDetails): boolean => {
    user.type = 'User';
    this.userData.push(user);
    this.storeUser(user);
    return true;
  };

  findUser(phoneNo: string, password: string): Promise<UserDetails> {
    return new Promise((resolve, reject) => {
      this.userData.forEach(user => {
        if (user.phone === phoneNo) {
          if (user.password === password) {
            resolve(user);
          }
        }
      });
      reject();
    });
    return;
  }

  storeUser(user: UserDetails) {
    this.isLoggedIn = true;
    localStorage.setItem('id', user.phone);
    localStorage.setItem('name', user.name);
    localStorage.setItem('type', user.type);
    return;
  }

  clearUser() {
    localStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate(['/Home']);
    return;
  }

  checkLoginStatus(): boolean {
    let value = '';
    value = localStorage.getItem('id');
    if (value === '') {
      return false;
    }
    return true;
  }

  getUserId() {
    if (this.checkLoginStatus()) {
      return localStorage.getItem('id');
    }
    return false;
  }

  getName() {
    if (this.checkLoginStatus()) {
      return localStorage.getItem('name');
    }
    return false;
  }
  findUserById(userId) {
    return this.userData.filter(user => user.phone === userId);
  }
  getPlans(userId) {
    return this.requestService.getAll().filter(request => request.userId === userId);
  }
}

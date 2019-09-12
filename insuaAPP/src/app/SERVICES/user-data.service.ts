import { Injectable } from '@angular/core';
import { User, UserDetails } from '../CLASSES/user';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}
  userData: UserDetails[] = [
    {
      name: 'The Administrator',
      phone: '0712345678',
      email: 'admin@insua.com',
      type: 'Admin',
      password: 'tttttttt',
    },
    {
      name: 'Jude Otenyo',
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
    localStorage.setItem('id', user.phone);
    localStorage.setItem('name', user.name);
    return;
  }

  clearUser() {
    localStorage.clear();
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
}

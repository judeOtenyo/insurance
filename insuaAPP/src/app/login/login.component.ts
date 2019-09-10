import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../SERVICES/authentication.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../SERVICES/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  LoginFailed = false;
  errorMessage = '';
  loginForm: FormGroup = new FormGroup({
    phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  constructor(
    public authService: AuthenticationService,
    private router: Router,
    private userService: UserDataService
  ) {}
  ngOnInit() {}
  login() {
    console.log(this.loginForm.value);
  }
}

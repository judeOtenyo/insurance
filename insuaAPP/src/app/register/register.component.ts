import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../SERVICES/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  displayError: boolean;
  newUserForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', Validators.email),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.required,
    ]),
  });
  constructor(
    private router: Router,
    public authService: AuthenticationService
  ) {}

  ngOnInit() {}

  submit() {
    console.log(this.newUserForm.value);
  }
}
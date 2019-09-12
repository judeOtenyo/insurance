import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../SERVICES/authentication.service';
import { UserDataService } from '../SERVICES/user-data.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
    public authService: AuthenticationService,
    public userService: UserDataService
  ) {}

  ngOnInit() {}

  submit() {
    this.userService.newUser(this.newUserForm.value);
    console.log(this.userService.userData);
    this.router.navigate(['/Portal']);
    return;
  }
}

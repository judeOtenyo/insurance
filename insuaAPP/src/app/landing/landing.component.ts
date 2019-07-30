import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../SERVICES/authentication.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(public authService: AuthenticationService) {}

  ngOnInit() {}
}

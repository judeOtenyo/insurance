import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/SERVICES/authentication.service';
import { UserDataService } from 'src/app/SERVICES/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public authService: AuthenticationService,
    private userData: UserDataService
  ) {}

  ngOnInit() {}
}

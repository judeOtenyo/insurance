import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/SERVICES/authentication.service';
import { UserDataService } from 'src/app/SERVICES/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAdmin = false;
  constructor(
    public authService: AuthenticationService,
    public userData: UserDataService
  ) {}

  ngOnInit() {
    if (localStorage.getItem('type') === 'Admin') {
      this.isAdmin = true;
    }
  }
}

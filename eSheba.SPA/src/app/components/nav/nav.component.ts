import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/app/_services/common-data.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn = false;
  constructor(private comnDataService: CommonDataService,
              private authService: AuthService,
              private router: Router) {
   }

  ngOnInit() {
    this.comnDataService.loginStatus.subscribe(value => this.isLoggedIn = value);
  }
  logout() {
    localStorage.setItem('token', '');
    this.authService.decodeToken();
    this.router.navigate(['/']);
  }
}

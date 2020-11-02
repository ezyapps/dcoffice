import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../../common/_services/alertify.service';
import { AuthService } from '../../common/_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  model: any = {};
  public isLoginProgress: boolean = false;
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
    ) {}
  ngOnInit(): void {
  }

  login() {
    this.isLoginProgress = true;
    this.authService.login(this.model).subscribe(
      next => {
        console.log('Loggedin successfully, token:' + localStorage.getItem('token'));
        this.alertify.success('Loggedin successfully');
        this.isLoginProgress = false;
      },
      error => {
        console.log(error);
        this.alertify.error('Sorry! Login failed. Please try with valid login credentials');
        this.isLoginProgress = false;
      },
      () => {
        this.router.navigate(['/']);
      }
    );
    console.log(this.model);
  }

}

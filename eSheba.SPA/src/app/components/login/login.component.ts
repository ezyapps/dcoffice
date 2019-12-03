import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertify: AlertifyService) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe(
      next => {
        console.log('Loggedin successfully, token:' + localStorage.getItem('token'));
        this.alertify.success('Loggedin successfully');
      },
      error => {
        console.log(error);
        console.log('Sorry! Login failed.');
        this.alertify.error('Sorry! Login failed.');
      },
      () => {
        this.router.navigate(['/']);
      }
    );
    console.log(this.model);
  }
}

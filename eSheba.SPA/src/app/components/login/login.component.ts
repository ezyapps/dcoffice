import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe(
      next => {
        console.log('Loggedin successfully, token:' + localStorage.getItem('token'));
      },
      error => {
        console.log(error);
        console.log('Sorry! Login failed.');
      },
      () => {
        this.router.navigate(['/']);
      }
    );
    console.log(this.model);
  }
}

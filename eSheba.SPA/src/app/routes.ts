import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './_guards/auth.guard';


export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
      path: '',
      children: [
          {path: 'login', component: LoginComponent}
      ]
  }
];

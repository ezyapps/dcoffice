import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
      path: '',
      children: [
          {path: 'login', component: LoginComponent}
      ]
  }
];

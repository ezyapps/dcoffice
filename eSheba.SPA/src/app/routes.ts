import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './modules/user/user.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
      path: '',
      children: [
          {path: 'login', component: LoginComponent}
      ]
  },
  {
    path: 'users', component: UserComponent
},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

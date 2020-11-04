import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserRouterModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserRouterModule
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../_services/auth.service';
import { SignalService } from '../../_services/signal.service';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss']
})
export class MenuUserComponent implements OnInit {
  userName: string;
  userRole: string;
  officeBranch: string;
  officeName: string;
  subscription: Subscription;
  constructor (
    private signalService: SignalService,
    protected authService: AuthService
    ) {
      this.subscription = this.signalService.getMessage().subscribe(
        message => {
          if(message == 'RELOAD-TOKEN')
          {
            this.setUserInfo();
          }
        });
     }

  ngOnInit() {
    this.setUserInfo();
  }
  
  setUserInfo() {
    this.authService.decodeToken();
    if ( this.authService.decodedToken) {
      this.userName = this.authService.decodedToken.unique_name;
      this.userRole = this.authService.decodedToken.RoleName;
      this.officeBranch = this.authService.decodedToken.BranchName;
      this.officeName = this.authService.decodedToken.OfficeName;
    }
  }
}

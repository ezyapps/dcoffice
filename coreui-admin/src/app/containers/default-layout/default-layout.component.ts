import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertifyService } from '../../common/_services/alertify.service';
import { AuthService } from '../../common/_services/auth.service';
import { SignalService } from '../../common/_services/signal.service';
import { UserRole } from '../../modules/users/models/user-roles.model';
import { UserRoleService } from '../../modules/users/services/user-role.service';
import { navItems } from '../../_nav';
import { appAdminNavItems } from '../../_nav.app-admin';
import { civilSuiteNavItems } from '../../_nav.civil-suite';
import { userMgtNavItems } from '../../_nav.user-mgt';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;

  userRoles: UserRole[];
  public navItems = navItems;
  subscription: Subscription;
  constructor(
    private signalService: SignalService,
    private alertify: AlertifyService,
    private router: Router,
    protected authService: AuthService,
    private userRoleService: UserRoleService
    ) {
    this.subscription = this.signalService.getActiveModuleName().subscribe(
      message => {
        switch (message) {
          case 'CIVILSUITE': {
              this.navItems = civilSuiteNavItems;
              break;
            }
          case 'APPADMIN': {
            this.navItems = appAdminNavItems;
            break;
          }
          case 'USERS': {
            this.navItems = userMgtNavItems;
            break;
          }
          default: {
            this.navItems = navItems;
          }
        }
      });
  }
  ngOnInit(): void {
    this.authService.decodeToken();
    if ( this.authService.decodedToken) {
      this.loadUserRoles();
    } else {
      this.router.navigate(['/login']);
    }
  }

  loadUserRoles() {
    const userId = this.authService.decodedToken.nameid;
    this.userRoleService.getAllByUser(userId).subscribe((data: any) => {
      this.userRoles = data;
      console.log(data);
    },
    error => {
      this.alertify.error(error.message);
    });
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout() {
    localStorage.removeItem('token');
    console.log('Logged out');
    this.alertify.message('Logged Out');
    this.router.navigate(['/login']);
  }
}

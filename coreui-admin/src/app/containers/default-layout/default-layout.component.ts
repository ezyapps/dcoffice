import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertifyService } from '../../common/_services/alertify.service';
import { AuthService } from '../../common/_services/auth.service';
import { ModuleChangerService } from '../../common/_services/module-changer.service';
import { navItems } from '../../_nav';
import { appAdminNavItems } from '../../_nav.app-admin';
import { civilSuiteNavItems } from '../../_nav.civil-suite';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  userName: string;
  public navItems = navItems;
  subscription: Subscription;
  constructor(
    private moduleChangerService: ModuleChangerService,
    private alertify: AlertifyService,
    private router: Router,
    protected authService: AuthService
    ) {
    this.subscription = this.moduleChangerService.getChangedModuleName().subscribe(
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
          default: {
            this.navItems = navItems;
          }
        }
      });
  }
  ngOnInit(): void {
    this.authService.decodeToken();
    if(this.authService.decodedToken) {
      this.userName = this.authService.decodedToken.unique_name;
    }else{
      this.router.navigate(['/login']);
    }


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

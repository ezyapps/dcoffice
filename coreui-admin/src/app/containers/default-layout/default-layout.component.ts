import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertifyService } from '../../common/_services/alertify.service';
import { ModuleChangerService } from '../../common/_services/module-changer.service';
import { navItems, civilSuiteNavItems, appAdminNavItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  subscription: Subscription;
  constructor(
    private moduleChangerService: ModuleChangerService,
    private alertify: AlertifyService,
    private router: Router
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

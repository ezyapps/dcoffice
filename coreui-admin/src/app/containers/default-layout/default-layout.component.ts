import {Component} from '@angular/core';
import { Subscription } from 'rxjs';
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
  constructor(private moduleChangerService: ModuleChangerService) {
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
}

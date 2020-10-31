import {Component} from '@angular/core';
import { Subscription } from 'rxjs';
import { ModuleChangerService } from '../../common/_services/module-changer.service';
import { navItems, civilSuiteNavItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems; //civilSuiteNavItems;
  subscription: Subscription;
  constructor(private moduleChangerService: ModuleChangerService) {
    this.subscription = this.moduleChangerService.getChangedModuleName().subscribe(
      message => {
        if (message === 'CIVILSUITE') {
          this.navItems = civilSuiteNavItems;
        } else {
          this.navItems = navItems;
        }
      }
    )
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}

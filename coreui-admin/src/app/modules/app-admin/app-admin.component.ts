import { Component, OnInit } from '@angular/core';
import { ModuleChangerService } from '../../common/_services/module-changer.service';

@Component({
  selector: 'app-app-admin',
  templateUrl: './app-admin.component.html',
  styleUrls: ['./app-admin.component.less']
})
export class AppAdminComponent implements OnInit {

  constructor(private moduleChangingService: ModuleChangerService) {
    this.moduleChangingService.currentModule('APPADMIN');
  }

  ngOnInit() {
  }

}

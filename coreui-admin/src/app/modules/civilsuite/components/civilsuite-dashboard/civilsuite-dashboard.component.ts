import { Component, OnInit } from '@angular/core';
import { ModuleChangerService } from '../../../../common/_services/module-changer.service';

@Component({
  selector: 'app-civilsuite-dashboard',
  templateUrl: './civilsuite-dashboard.component.html',
  styleUrls: ['./civilsuite-dashboard.component.less']
})
export class CivilsuiteDashboardComponent implements OnInit {

  constructor(private moduleChangingService: ModuleChangerService) {
    this.moduleChangingService.currentModule('CIVILSUITE');
  }

  ngOnInit() {

  }

}

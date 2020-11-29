import { Component, OnInit } from '@angular/core';
import { SignalService } from '../../../../common/_services/signal.service';

@Component({
  selector: 'app-civilsuite-dashboard',
  templateUrl: './civilsuite-dashboard.component.html',
  styleUrls: ['./civilsuite-dashboard.component.less']
})
export class CivilsuiteDashboardComponent implements OnInit {

  constructor(private signalService: SignalService) {
    this.signalService.setActiveModule('CIVILSUITE');
  }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';
import { ModuleChangerService } from '../../_services/module-changer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private moduleChangingService: ModuleChangerService) {
    this.moduleChangingService.currentModule('MAIN');
   }

  ngOnInit() {
  }

}

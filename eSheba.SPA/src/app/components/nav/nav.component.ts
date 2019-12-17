import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/app/_services/common-data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn = false;
  constructor(private comnDataService: CommonDataService) {
   }

  ngOnInit() {
    this.comnDataService.loginStatus.subscribe(value => this.isLoggedIn = value);
  }

}

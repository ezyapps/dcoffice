import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/app/_services/common-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn = true;
  constructor(private comnDataService: CommonDataService) { }

  ngOnInit() {
  }
  toggleLoggedIn() {
    this.comnDataService.changeLogginValue(!this.loggedIn);
    this.loggedIn = !this.loggedIn;
    console.log(this.loggedIn);
  }

}

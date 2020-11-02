import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-case',
  templateUrl: './new-case.component.html',
  styleUrls: ['./new-case.component.less']
})
export class NewCaseComponent implements OnInit {
  model: any = {}
  constructor() { }

  ngOnInit() {
  }
  saveNewCase() {
    console.log(this.model);
  }
}

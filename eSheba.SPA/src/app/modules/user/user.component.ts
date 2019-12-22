import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userTypes = [
    {
      typeName: 'Assistant Commissioner',
      count: 10
    },
    {
      typeName: 'UDC',
      count: 20
    },
    {
      typeName: 'Office Assistant',
      count: 15
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

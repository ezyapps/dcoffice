import { Component, OnInit } from '@angular/core';
import { DesignationService } from 'src/app/_services/designation.service';
import { Designation } from '../../models/designation';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {
  designations: Designation[];
  constructor(private designService: DesignationService) { }

  ngOnInit() {
    this.loadDesignations();
  }
  loadDesignations() {
    this.designService.getAll().subscribe(values => this.designations = values);
  }
}

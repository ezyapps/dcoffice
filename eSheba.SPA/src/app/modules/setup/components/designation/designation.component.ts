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
  editDesignation: Designation;
  editMode = false;
  constructor(private designService: DesignationService) { }

  ngOnInit() {
    this.loadDesignations();
  }
  showEditView(value) {
    this.editMode = true;
    this.editDesignation = value;
  }
  loadDesignations() {
    this.designService.getAll().subscribe(values => this.designations = values);
  }

}

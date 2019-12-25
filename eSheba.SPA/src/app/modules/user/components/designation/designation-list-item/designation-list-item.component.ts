import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Designation } from '../../../models/designation';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { DesignationService } from 'src/app/_services/designation.service';

@Component({
  selector: 'app-designation-list-item',
  templateUrl: './designation-list-item.component.html',
  styleUrls: ['./designation-list-item.component.css']
})
export class DesignationListItemComponent implements OnInit {
  @Input() designation: Designation;
  @Output() reloadList = new EventEmitter();
  @Output() showEditView = new EventEmitter();
  constructor(private alertifyService: AlertifyService,
              private designService: DesignationService) { }

  ngOnInit() {
  }
  edit() {
    this.showEditView.emit(this.designation);
  }
  delete() {
    this.alertifyService.confirm('Are you sure about deleting the designation "' + this.designation.title + '"?',
    () => {
      this.designService.delete(this.designation.id).subscribe(resp => {
        this.alertifyService.success(resp);
        this.reloadList.emit();
      });

    });
  }
}

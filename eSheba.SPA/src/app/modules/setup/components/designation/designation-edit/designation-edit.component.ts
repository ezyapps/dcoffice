import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Designation } from '../../../models/designation';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { DesignationService } from 'src/app/_services/designation.service';

@Component({
  selector: 'app-designation-edit',
  templateUrl: './designation-edit.component.html',
  styleUrls: ['./designation-edit.component.css']
})
export class DesignationEditComponent implements OnInit {
  @Input() model: Designation;
  @Output() editingComplete = new EventEmitter();
  constructor(private alertifyService: AlertifyService,
              private designService: DesignationService) { }

  ngOnInit() {
  }
  editDesignation() {
    this.alertifyService.confirm('আপনি কি নিশ্চিত সংরক্ষন করার জন্য?', () => {
      this.designService.edit(this.model).subscribe(data => {
        this.alertifyService.success(data);
        this.editingComplete.emit();
      });
    });

  }
  cancelEditing() {
    this.editingComplete.emit();
  }
}

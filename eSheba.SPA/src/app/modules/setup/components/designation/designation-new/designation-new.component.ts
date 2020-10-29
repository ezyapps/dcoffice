import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { DesignationService } from 'src/app/_services/designation.service';

@Component({
  selector: 'app-designation-new',
  templateUrl: './designation-new.component.html',
  styleUrls: ['./designation-new.component.css']
})
export class DesignationNewComponent implements OnInit {
  @Output() disgnationCrated = new EventEmitter();
  model: any = {};
  constructor(private designationService: DesignationService,
              private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  addDesignation() {
    console.log(this.model);
    this.designationService.save(this.model)
      .subscribe(arg => {
        this.alertifyService.message(arg);
        this.model.title = '';
        this.disgnationCrated.emit(true);
      });

  }
}

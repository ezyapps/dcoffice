import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CivilSuiteRoutingModule } from './civilsuite-routing.module';
import {FieldsetModule} from 'primeng/fieldset';
import { CivilsuiteDashboardComponent } from './components/civilsuite-dashboard/civilsuite-dashboard.component';
import { NewCaseComponent } from './components/new-case/new-case.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    CivilSuiteRoutingModule,
    FormsModule,
    FieldsetModule
  ],
  declarations: [
    CivilsuiteDashboardComponent,
    NewCaseComponent
  ]
})
export class CivilSuiteModule {}

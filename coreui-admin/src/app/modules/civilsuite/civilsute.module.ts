import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CivilsuiteDashboardComponent } from './civilsuite-dashboard/civilsuite-dashboard.component';
import { CivilSuiteRoutingModule } from './civilsuite-routing.module';
import { NewCaseComponent } from './new-case/new-case.component';

@NgModule({
  imports: [
    CivilSuiteRoutingModule,
    FormsModule
  ],
  declarations: [
    CivilsuiteDashboardComponent,
    NewCaseComponent
  ]
})
export class CivilSuiteModule {}

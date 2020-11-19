import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CivilSuiteRoutingModule } from './civilsuite-routing.module';
import {FieldsetModule} from 'primeng/fieldset';
import { CivilsuiteDashboardComponent } from './components/civilsuite-dashboard/civilsuite-dashboard.component';
import { NewCaseComponent } from './components/new-case/new-case.component';
import { CommonModule } from '@angular/common';
import { CaseListComponent } from './components/case-list/case-list.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CaseDetailsComponent } from './components/case-details/case-details.component';
@NgModule({
  imports: [
    CommonModule,
    CivilSuiteRoutingModule,
    FormsModule,
    ButtonModule,
    TableModule,
    FieldsetModule
  ],
  declarations: [
    CivilsuiteDashboardComponent,
    NewCaseComponent,
    CaseListComponent,
    CaseDetailsComponent
  ]
})
export class CivilSuiteModule {}

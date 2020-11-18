import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrictListComponent } from './components/district/district-list/district-list.component';
import { DivisionListComponent } from './components/division/division-list/division-list.component';
import { MouzaComponent } from './components/mouza/mouza.component';
import { UnionComponent } from './components/union/union.component';
import { UpazilaComponent } from './components/upazila/upazila.component';
import { GeoLocationComponent } from './geo-location.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Geo Location'
    },
    children: [
      {
        path: 'dashboard',
        component: GeoLocationComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'divisions',
        component: DivisionListComponent,
        data: {
          title: 'Divisions'
        }
      },
      {
        path: 'districts',
        component: DistrictListComponent,
        data: {
          title: 'Districts'
        }
      },
      {
        path: 'upazilas',
        component: UpazilaComponent,
        data: {
          title: 'Upazilas'
        }
      },
      {
        path: 'unions',
        component: UnionComponent,
        data: {
          title: 'Unions'
        }
      },
      {
        path: 'mouzas',
        component: MouzaComponent,
        data: {
          title: 'Unions'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeoLocaionRoutingModule {

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FacilitiesCenterComponent} from "./facilities-center/facilities-center.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {DirectorsCenterComponent} from "./genericsDirectory/director/directors-center/directors-center.component";
import {FacilityServiceCenterComponent} from "./genericsDirectory/FacilityService/facility-service-center/facility-service-center.component";
import {EventsCenterComponent} from "./genericsDirectory/events/events-center/events-center.component";
import {FieldsCenterComponent} from "./genericsDirectory/fields/fields-center/fields-center.component";
import {OfficersCenterComponent} from "./genericsDirectory/officers/officers-center/officers-center.component";
import {SchedulingsCenterComponent} from "./genericsDirectory/schedulings/schedulings-center/schedulings-center.component";
import {StuffsCenterComponent} from "./genericsDirectory/stuffs/stuffs-center/stuffs-center.component";
import {TasksCenterComponent} from "./genericsDirectory/tasks/tasks-center/tasks-center.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'facilities',
    component: FacilitiesCenterComponent,
    children: [
      {path: ':facilitiesId/directors', component: DirectorsCenterComponent},
      {path: ':facilitiesId/facilityService', component: FacilityServiceCenterComponent},
      {path: ':facilitiesId/events', component: EventsCenterComponent},
      {path: ':facilitiesId/fields', component: FieldsCenterComponent},
      {path: ':facilitiesId/officers', component: OfficersCenterComponent},
      {path: ':facilitiesId/schedulings', component: SchedulingsCenterComponent},
      {path: ':facilitiesId/tasks', component: TasksCenterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

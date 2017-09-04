import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {Http, HttpModule} from "@angular/http";
import { FacilitiesCenterComponent } from './facilities-center/facilities-center.component';
import { FacilitiesListComponent } from './facilities-list/facilities-list.component';
import { FacilitiesDetailsComponent } from './facilities-details/facilities-details.component';
import {FacilitiesService} from "./service/facilities.service";
import { SignInComponent } from './sign-in/sign-in.component';
import {UserService} from "./service/user.service";
import {AuthService} from "./service/auth.service";
import { DirectorsCenterComponent } from './genericsDirectory/director/directors-center/directors-center.component';
import { DirectorsDetailsComponent } from './genericsDirectory/director/directors-details/directors-details.component';
import { DirectorsListComponent } from './genericsDirectory/director/directors-list/directors-list.component';
import { FacilityServiceCenterComponent } from './genericsDirectory/FacilityService/facility-service-center/facility-service-center.component';
import { FacilityServiceListComponent } from './genericsDirectory/FacilityService/facility-service-list/facility-service-list.component';
import { FacilityServiceDetailsComponent } from './genericsDirectory/FacilityService/facility-service-details/facility-service-details.component';
import { EventsCenterComponent } from './genericsDirectory/events/events-center/events-center.component';
import { EventsListComponent } from './genericsDirectory/events/events-list/events-list.component';
import { EventsDetailsComponent } from './genericsDirectory/events/events-details/events-details.component';
import { FieldsCenterComponent } from './genericsDirectory/fields/fields-center/fields-center.component';
import { FieldsListComponent } from './genericsDirectory/fields/fields-list/fields-list.component';
import { FieldsDetailsComponent } from './genericsDirectory/fields/fields-details/fields-details.component';
import { OfficersCenterComponent } from './genericsDirectory/officers/officers-center/officers-center.component';
import { OfficersListComponent } from './genericsDirectory/officers/officers-list/officers-list.component';
import { OfficersDetailsComponent } from './genericsDirectory/officers/officers-details/officers-details.component';
import { SchedulingsCenterComponent } from './genericsDirectory/schedulings/schedulings-center/schedulings-center.component';
import { SchedulingsDetailsComponent } from './genericsDirectory/schedulings/schedulings-details/schedulings-details.component';
import { SchedulingsListComponent } from './genericsDirectory/schedulings/schedulings-list/schedulings-list.component';
import { StuffsCenterComponent } from './genericsDirectory/stuffs/stuffs-center/stuffs-center.component';
import { StuffsDetailsComponent } from './genericsDirectory/stuffs/stuffs-details/stuffs-details.component';
import { StuffsListComponent } from './genericsDirectory/stuffs/stuffs-list/stuffs-list.component';
import { TasksCenterComponent } from './genericsDirectory/tasks/tasks-center/tasks-center.component';
import { TasksDetailsComponent } from './genericsDirectory/tasks/tasks-details/tasks-details.component';
import { TasksListComponent } from './genericsDirectory/tasks/tasks-list/tasks-list.component';
import {DirectorsService} from "./service/directors.service";
import {FacilityServiceService} from "./service/facility-service.service";
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {EventsService} from "./service/events.service";
import {FieldsService} from "./service/fields.service";
import {OfficersService} from "./service/officers.service";
import {SchedulingsService} from "./service/schedulings.service";
import {StuffsService} from "./service/stuffs.service";
import {TasksService} from "./service/tasks.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacilitiesCenterComponent,
    FacilitiesListComponent,
    FacilitiesDetailsComponent,
    SignInComponent,
    DirectorsCenterComponent,
    DirectorsDetailsComponent,
    DirectorsListComponent,
    FacilityServiceCenterComponent,
    FacilityServiceListComponent,
    FacilityServiceDetailsComponent,
    EventsCenterComponent,
    EventsListComponent,
    EventsDetailsComponent,
    FieldsCenterComponent,
    FieldsListComponent,
    FieldsDetailsComponent,
    OfficersCenterComponent,
    OfficersListComponent,
    OfficersDetailsComponent,
    SchedulingsCenterComponent,
    SchedulingsDetailsComponent,
    SchedulingsListComponent,
    StuffsCenterComponent,
    StuffsDetailsComponent,
    StuffsListComponent,
    TasksCenterComponent,
    TasksDetailsComponent,
    TasksListComponent,
    NavigationBarComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [FacilitiesService,
    UserService,
    AuthService,
    DirectorsService,
    FacilityServiceService,
    EventsService,
    FieldsService,
    OfficersService,
    SchedulingsService,
    StuffsService,
    TasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    localStorage.setItem('isEmbedded', "true");
  }
}

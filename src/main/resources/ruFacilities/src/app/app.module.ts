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
import {DirectorsService} from "./service/genericService/directors.service";
import {FacilityServiceService} from "./service/genericService/facility-service.service";
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {EventsService} from "./service/genericService/events.service";
import {FieldsService} from "./service/genericService/fields.service";
import {OfficersService} from "./service/genericService/officers.service";
import {SchedulingsService} from "./service/genericService/schedulings.service";
import {StuffsService} from "./service/genericService/stuffs.service";
import {TasksService} from "./service/genericService/tasks.service";
import {AdmissionHelplineService} from "./service/ictcenter/admission-helpline.service";
import {CoursesService} from "./service/ictcenter/courses.service";
import {IpProvidesConsumerService} from "./service/ictcenter/ip-provides-consumer.service";
import {NetConnectionsLocationService} from "./service/ictcenter/net-connections-location.service";
import {AmbulanceServiceService} from "./service/medicalcenter/ambulance-service.service";
import {EmergencyContactsService} from "./service/medicalcenter/emergency-contacts.service";
import {MedicineService} from "./service/medicalcenter/medicine.service";
import {SpecialistService} from "./service/medicalcenter/specialist.service";
import {TransportationInfoService} from "./service/transportation/transportation-info.service";
import { TransportationInfoCenterComponent } from './transportation/transportationInfo/transportation-info-center/transportation-info-center.component';
import { TransportationInfoDetailsComponent } from './transportation/transportationInfo/transportation-info-details/transportation-info-details.component';
import { TransportationInfoListComponent } from './transportation/transportationInfo/transportation-info-list/transportation-info-list.component';
import { AmbulanceServiceCenterComponent } from './medicalcenter/AmbulanceService/ambulance-service-center/ambulance-service-center.component';
import { AmbulanceServiceDetailsComponent } from './medicalcenter/AmbulanceService/ambulance-service-details/ambulance-service-details.component';
import { AmbulanceServiceListComponent } from './medicalcenter/AmbulanceService/ambulance-service-list/ambulance-service-list.component';
import { EmergencyContactsCenterComponent } from './medicalcenter/EmergencyContacts/emergency-contacts-center/emergency-contacts-center.component';
import { EmergencyContactsDetailsComponent } from './medicalcenter/EmergencyContacts/emergency-contacts-details/emergency-contacts-details.component';
import { EmergencyContactsListComponent } from './medicalcenter/EmergencyContacts/emergency-contacts-list/emergency-contacts-list.component';
import { MedicineCenterComponent } from './medicalcenter/Medicine/medicine-center/medicine-center.component';
import { MedicineDetailsComponent } from './medicalcenter/Medicine/medicine-details/medicine-details.component';
import { MedicineListComponent } from './medicalcenter/Medicine/medicine-list/medicine-list.component';
import { SpecialistCenterComponent } from './medicalcenter/Specialist/specialist-center/specialist-center.component';
import { SpecialistDetailsComponent } from './medicalcenter/Specialist/specialist-details/specialist-details.component';
import { SpecialistListComponent } from './medicalcenter/Specialist/specialist-list/specialist-list.component';
import { AdmissionHelplineCenterComponent } from './ictcenter/admissionHelpline/admission-helpline-center/admission-helpline-center.component';
import { AdmissionHelplineDetailsComponent } from './ictcenter/admissionHelpline/admission-helpline-details/admission-helpline-details.component';
import { AdmissionHelplineListComponent } from './ictcenter/admissionHelpline/admission-helpline-list/admission-helpline-list.component';
import { CoursesCenterComponent } from './ictcenter/courses/courses-center/courses-center.component';
import { CoursesDetailsComponent } from './ictcenter/courses/courses-details/courses-details.component';
import { CoursesListComponent } from './ictcenter/courses/courses-list/courses-list.component';
import { IpProvidesConsumerCenterComponent } from './ictcenter/ipProvidesConsumer/ip-provides-consumer-center/ip-provides-consumer-center.component';
import { IpProvidesConsumerDetailsComponent } from './ictcenter/ipProvidesConsumer/ip-provides-consumer-details/ip-provides-consumer-details.component';
import { IpProvidesConsumerListComponent } from './ictcenter/ipProvidesConsumer/ip-provides-consumer-list/ip-provides-consumer-list.component';
import { NetConnectionsLocationCenterComponent } from './ictcenter/netConnectionsLocation/net-connections-location-center/net-connections-location-center.component';
import { NetConnectionsLocationDetailsComponent } from './ictcenter/netConnectionsLocation/net-connections-location-details/net-connections-location-details.component';
import { NetConnectionsLocationListComponent } from './ictcenter/netConnectionsLocation/net-connections-location-list/net-connections-location-list.component';

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
    SignUpComponent,
    TransportationInfoCenterComponent,
    TransportationInfoDetailsComponent,
    TransportationInfoListComponent,
    AmbulanceServiceCenterComponent,
    AmbulanceServiceDetailsComponent,
    AmbulanceServiceListComponent,
    EmergencyContactsCenterComponent,
    EmergencyContactsDetailsComponent,
    EmergencyContactsListComponent,
    MedicineCenterComponent,
    MedicineDetailsComponent,
    MedicineListComponent,
    SpecialistCenterComponent,
    SpecialistDetailsComponent,
    SpecialistListComponent,
    AdmissionHelplineCenterComponent,
    AdmissionHelplineDetailsComponent,
    AdmissionHelplineListComponent,
    CoursesCenterComponent,
    CoursesDetailsComponent,
    CoursesListComponent,
    IpProvidesConsumerCenterComponent,
    IpProvidesConsumerDetailsComponent,
    IpProvidesConsumerListComponent,
    NetConnectionsLocationCenterComponent,
    NetConnectionsLocationDetailsComponent,
    NetConnectionsLocationListComponent
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
    TasksService,
    AdmissionHelplineService,
    CoursesService,
    IpProvidesConsumerService,
    NetConnectionsLocationService,
    AmbulanceServiceService,
    EmergencyContactsService,
    MedicineService,
    SpecialistService,
    TransportationInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    localStorage.setItem('isEmbedded', "true");
  }
}

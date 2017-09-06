import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Facilities} from "../model/facilities";
import {FacilitiesService} from "../service/facilities.service";
import {Directors} from "../model/genericModel/directors";
import {DirectorsService} from "../service/genericService/directors.service";
import {FacilityServiceService} from "../service/genericService/facility-service.service";
import {FacilityService} from "../model/genericModel/facility-service";
import {Events} from "../model/genericModel/events";
import {Fields} from "../model/genericModel/fields";
import {Officers} from "../model/genericModel/officers";
import {Schedulings} from "../model/genericModel/schedulings";
import {Stuffs} from "../model/genericModel/stuffs";
import {Tasks} from "../model/genericModel/tasks";
import {EventsService} from "../service/genericService/events.service";
import {FieldsService} from "../service/genericService/fields.service";
import {OfficersService} from "../service/genericService/officers.service";
import {SchedulingsService} from "../service/genericService/schedulings.service";
import {StuffsService} from "../service/genericService/stuffs.service";
import {TasksService} from "../service/genericService/tasks.service";
import {AdmissionHelplineService} from "../service/ictcenter/admission-helpline.service";
import {CoursesService} from "../service/ictcenter/courses.service";
import {IpProvidesConsumerService} from "../service/ictcenter/ip-provides-consumer.service";
import {NetConnectionsLocationService} from "../service/ictcenter/net-connections-location.service";
import {AmbulanceServiceService} from "../service/medicalcenter/ambulance-service.service";
import {EmergencyContactsService} from "../service/medicalcenter/emergency-contacts.service";
import {MedicineService} from "../service/medicalcenter/medicine.service";
import {Specialist} from "../model/medicalcenter/specialist";
import {SpecialistService} from "../service/medicalcenter/specialist.service";
import {TransportationInfoService} from "../service/transportation/transportation-info.service";
import {AdmissionHelpline} from "../model/ictcenter/admission-helpline";
import {Courses} from "../model/ictcenter/courses";
import {IpProvidesConsumer} from "../model/ictcenter/ip-provides-consumer";
import {NetConnectionsLocation} from "../model/ictcenter/net-connections-location";
import {AmbulanceService} from "../model/medicalcenter/ambulance-service";
import {EmergencyContacts} from "../model/medicalcenter/emergency-contacts";
import {Medicine} from "../model/medicalcenter/medicine";
import {TransportationInfo} from "../model/transportation/transportation-info";

@Component({
  selector: 'app-facilities-center',
  templateUrl: './facilities-center.component.html',
  styleUrls: ['./facilities-center.component.css']
})
export class FacilitiesCenterComponent implements OnInit {

  selectedFacility: Facilities;
  private hideNewFacility: boolean = true;

  isIctCenterFacility: boolean;
  isMedicalCenterFacility: boolean;
  isTransportationSystemCenterFacility: boolean;

  visibilityStatusDirectors: boolean;
  visibilityStatusEvents: boolean;
  visibilityStatusFacilityService: boolean;
  visibilityStatusFields: boolean;
  visibilityStatusOfficers: boolean;
  visibilityStatusSchedulings: boolean;
  visibilityStatusStuffs: boolean;
  visibilityStatusTasks: boolean;

  visibilityStatusAdmissionHelpline: boolean;
  visibilityStatusCourses: boolean;
  visibilityStatusNetConnectionsLocation: boolean;
  visibilityStatusIpProvidesConsumer: boolean;

  visibilityStatusAmbulanceService: boolean;
  visibilityStatusEmergencyContacts: boolean;
  visibilityStatusMedicine: boolean;
  visibilityStatusSpecialist: boolean;

  visibilityStatusTransportationInfo: boolean;

  @Output("newSelectedFacilityEvent")
  private newSelectedFacilityEvent = new EventEmitter();

  private isEmbedded: boolean;

  //generic object
  facilities: Array<Facilities> = [];
  directors: Array<Directors> = [];
  facilityServices: Array<FacilityService> = [];
  events: Array<Events> = [];
  fields: Array<Fields> = [];
  officers: Array<Officers> = [];
  schedulings: Array<Schedulings> = [];
  stuffs: Array<Stuffs> = [];
  tasks: Array<Tasks> = [];

  //ict center
  admissionHelpline: Array<AdmissionHelpline> = [];
  courses: Array<Courses> = [];
  ipProvidesConsumer: Array<IpProvidesConsumer> = [];
  netConnectionsLocation: Array<NetConnectionsLocation> = [];
  //medical center
  ambulanceService: Array<AmbulanceService> = [];
  emergencyContacts: Array<EmergencyContacts> = [];
  medicine: Array<Medicine> = [];
  specialist: Array<Specialist> = [];
  //transportation
  transportationInfo: Array<TransportationInfo> = [];

  constructor(private facilitiesService: FacilitiesService,
              private directorsService: DirectorsService,
              private facilityServiceService: FacilityServiceService,
              private eventsService: EventsService,
              private fieldsService: FieldsService,
              private officersService: OfficersService,
              private schedulingsService: SchedulingsService,
              private stuffsService: StuffsService,
              private tasksService: TasksService,

              private admissionHelplineService: AdmissionHelplineService,
              private coursesService: CoursesService,
              private ipProvidesConsumerService: IpProvidesConsumerService,
              private netConnectionsLocationService: NetConnectionsLocationService,

              private ambulanceServiceService: AmbulanceServiceService,
              private emergencyContactsService: EmergencyContactsService,
              private medicineService: MedicineService,
              private specialistService: SpecialistService,

              private transportationInfoService: TransportationInfoService) {

    this.isEmbedded = JSON.parse(localStorage.getItem('isEmbedded'));
    //generic object
    this.visibilityStatusDirectors = false;
    this.visibilityStatusEvents = false;
    this.visibilityStatusFacilityService = false;
    this.visibilityStatusFields = false;
    this.visibilityStatusOfficers = false;
    this.visibilityStatusSchedulings = false;
    this.visibilityStatusStuffs = false;
    this.visibilityStatusTasks = false;
    //ict center
    this.visibilityStatusAdmissionHelpline = false;
    this.visibilityStatusCourses = false;
    this.visibilityStatusNetConnectionsLocation = false;
    this.visibilityStatusIpProvidesConsumer = false;
    //medical center
    this.visibilityStatusAmbulanceService = false;
    this.visibilityStatusEmergencyContacts = false;
    this.visibilityStatusMedicine = false;
    this.visibilityStatusSpecialist = false;
    //transportation
    this.visibilityStatusTransportationInfo = false;

    if(this.isEmbedded == true) {
      this.facilities = [];
      this.directors = [];
      this.facilityServices = [];
      this.events = [];
      this.fields = [];
      this.officers = [];
      this.schedulings = [];
      this.stuffs = [];
      this.tasks = [];
    } else {
    }

    this.isIctCenterFacility = false;
    this.isMedicalCenterFacility = false;
    this.isTransportationSystemCenterFacility = false;
  }

  ngOnInit() {
    if(this.isEmbedded == true) {
      this.facilitiesService.getFacilities().subscribe(resFacilities => this.facilities = resFacilities);
    }
  }

  onSelectFacility(facility: Facilities) {
    this.selectedFacility = facility;
    if(this.isEmbedded == true) {
      //generic object
      this.directorsService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.directors = resGenericObjects);
      this.eventsService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.events = resGenericObjects);
      this.facilityServiceService.getFacilityService(this.selectedFacility).subscribe(resFacilityServices => this.facilityServices = resFacilityServices);
      this.fieldsService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.fields = resGenericObjects);
      this.officersService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.officers = resGenericObjects);
      this.schedulingsService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.schedulings = resGenericObjects);
      this.stuffsService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.stuffs = resGenericObjects);
      this.tasksService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.tasks = resGenericObjects);
      //ict center
      this.admissionHelplineService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.admissionHelpline = resGenericObjects);
      this.coursesService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.courses = resGenericObjects);
      this.ipProvidesConsumerService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.ipProvidesConsumer = resGenericObjects);
      this.netConnectionsLocationService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.netConnectionsLocation = resGenericObjects);
      //medical center
      this.ambulanceServiceService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.ambulanceService = resGenericObjects);
      this.emergencyContactsService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.emergencyContacts = resGenericObjects);
      this.medicineService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.medicine = resGenericObjects);
      this.specialistService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.specialist = resGenericObjects);
      //transportation
      this.transportationInfoService.getGenericObjects(this.selectedFacility).subscribe(resGenericObjects => this.transportationInfo = resGenericObjects);

      if(this.selectedFacility.facilitiesName == "ICT Center") {
        this.isIctCenterFacility = true;
        this.isMedicalCenterFacility = false;
        this.isTransportationSystemCenterFacility = false;
      } else if(this.selectedFacility.facilitiesName == "Medical Center") {
        this.isIctCenterFacility = false;
        this.isMedicalCenterFacility = true;
        this.isTransportationSystemCenterFacility = false;
      } else if(this.selectedFacility.facilitiesName == "Transportation System") {
        this.isIctCenterFacility = false;
        this.isMedicalCenterFacility = false;
        this.isTransportationSystemCenterFacility = true;
      }

    }
    this.newSelectedFacilityEvent.emit(this.selectedFacility);
  }

  onUpdateFacilityEvent(facility: Facilities) {
    if(this.isEmbedded == true) {
      this.facilitiesService.updateFacilities(facility).subscribe(resFacilities => this.facilities = resFacilities);
    }
  }

  onDeleteFacilityEvent(facility: Facilities) {
    if(this.isEmbedded == true) {
      this.facilitiesService.deleteFacilities(facility).subscribe(() => {});
      this.facilities.splice(this.facilities.indexOf(facility), 1);
      this.selectedFacility = null;
    }
  }

  onCreateFacility() {
    if(this.isEmbedded == true) {
      this.hideNewFacility = !this.hideNewFacility;
    }
  }

  onSubmitNewFacility(facility: Facilities) {
    facility.facilitiesId = "facilitiesId" + facility.facilitiesName +   Math.floor((Math.random() * 100) + 1).toString() + "and" + Math.floor((Math.random() * 1000) + 3000).toString();
    if(this.isEmbedded == true) {
      this.facilitiesService.createFacilities(facility).subscribe(resFacilities => this.facilities = resFacilities);
      this.hideNewFacility = !this.hideNewFacility;
      this.selectedFacility = facility;
      this.facilities.push(facility);
    }
  }

  //generic objects
  onDirectorsVisibility() {
    this.visibilityStatusDirectors = !this.visibilityStatusDirectors;
  }
  onEventsVisibility() {
    this.visibilityStatusEvents = !this.visibilityStatusEvents;
  }
  onFacilityServiceVisibility() {
    this.visibilityStatusFacilityService = !this.visibilityStatusFacilityService;
  }
  onFieldsVisibility() {
    this.visibilityStatusFields = !this.visibilityStatusFields;
  }
  onOfficersVisibility() {
    this.visibilityStatusOfficers = !this.visibilityStatusOfficers;
  }
  onSchedulingsVisibility() {
    this.visibilityStatusSchedulings = !this.visibilityStatusSchedulings;
  }
  onStuffsVisibility() {
    this.visibilityStatusStuffs = !this.visibilityStatusStuffs;
  }
  onTasksVisibility() {
    this.visibilityStatusTasks = !this.visibilityStatusTasks;
  }
  //ict center
  onAdmissionHelplineVisibility() {
    this.visibilityStatusAdmissionHelpline = !this.visibilityStatusAdmissionHelpline;
  }
  onCoursesVisibility() {
    this.visibilityStatusCourses = !this.visibilityStatusCourses;
  }
  onIpProvidesConsumerVisibility() {
    this.visibilityStatusIpProvidesConsumer = !this.visibilityStatusIpProvidesConsumer;
  }
  onNetConnectionsLocationVisibility() {
    this.visibilityStatusNetConnectionsLocation = !this.visibilityStatusNetConnectionsLocation;
  }
  //medical center
  onAmbulanceServiceVisibility() {
    this.visibilityStatusAmbulanceService = !this.visibilityStatusAmbulanceService;
  }
  onEmergencyContactsVisibility() {
    this.visibilityStatusEmergencyContacts = !this.visibilityStatusEmergencyContacts;
  }
  onMedicineVisibility() {
    this.visibilityStatusMedicine = !this.visibilityStatusMedicine;
  }
  onSpecialistVisibility() {
    this.visibilityStatusSpecialist = !this.visibilityStatusSpecialist;
  }
  //transportation
  onTransportationInfoVisibility() {
    this.visibilityStatusTransportationInfo = !this.visibilityStatusTransportationInfo;
  }
}

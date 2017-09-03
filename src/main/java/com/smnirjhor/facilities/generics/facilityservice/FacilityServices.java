package com.smnirjhor.facilities.generics.facilityservice;

import com.smnirjhor.facilities.Facilities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * Created by smnirjhor on 7/24/17.
 */
@Entity
public class FacilityServices {

    @Id
    private String facilityServicesId;
    private String facilityServicesName;
    private String facilityServicesInfo;
    @ManyToOne
    private Facilities facilities;

    public FacilityServices() {
    }

    public FacilityServices(String facilityServicesId, String facilityServicesName, String facilityServicesInfo, Facilities facilities) {
        this.facilityServicesId = facilityServicesId;
        this.facilityServicesName = facilityServicesName;
        this.facilityServicesInfo = facilityServicesInfo;
        this.facilities = facilities;
    }

    public String getFacilityServicesId() {
        return facilityServicesId;
    }

    public void setFacilityServicesId(String facilityServicesId) {
        this.facilityServicesId = facilityServicesId;
    }

    public String getFacilityServicesName() {
        return facilityServicesName;
    }

    public void setFacilityServicesName(String facilityServicesName) {
        this.facilityServicesName = facilityServicesName;
    }

    public String getFacilityServicesInfo() {
        return facilityServicesInfo;
    }

    public void setFacilityServicesInfo(String facilityServicesInfo) {
        this.facilityServicesInfo = facilityServicesInfo;
    }

    public Facilities getFacilities() {
        return facilities;
    }

    public void setFacilities(Facilities facilities) {
        this.facilities = facilities;
    }
}

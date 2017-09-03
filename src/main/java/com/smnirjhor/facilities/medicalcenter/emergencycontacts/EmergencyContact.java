package com.smnirjhor.facilities.medicalcenter.emergencycontacts;

import com.smnirjhor.facilities.Facilities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * Created by smnirjhor on 8/10/17.
 */
@Entity
public class EmergencyContact {
    @Id
    private String medicalCenterEmergencyContactId;
    private String medicalCenterEmergencyContactNumber;
    @ManyToOne
    private Facilities facilities;

    public EmergencyContact() {
    }

    public EmergencyContact(String medicalCenterEmergencyContactId, String medicalCenterEmergencyContactNumber, Facilities facilities) {
        this.medicalCenterEmergencyContactId = medicalCenterEmergencyContactId;
        this.medicalCenterEmergencyContactNumber = medicalCenterEmergencyContactNumber;
        this.facilities = facilities;
    }

    public String getMedicalCenterEmergencyContactId() {
        return medicalCenterEmergencyContactId;
    }

    public void setMedicalCenterEmergencyContactId(String medicalCenterEmergencyContactId) {
        this.medicalCenterEmergencyContactId = medicalCenterEmergencyContactId;
    }

    public String getMedicalCenterEmergencyContactNumber() {
        return medicalCenterEmergencyContactNumber;
    }

    public void setMedicalCenterEmergencyContactNumber(String medicalCenterEmergencyContactNumber) {
        this.medicalCenterEmergencyContactNumber = medicalCenterEmergencyContactNumber;
    }

    public Facilities getFacilities() {
        return facilities;
    }

    public void setFacilities(Facilities facilities) {
        this.facilities = facilities;
    }
}

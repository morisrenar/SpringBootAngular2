package com.smnirjhor.facilities.medicalcenter.specialist;

import com.smnirjhor.facilities.Facilities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * Created by smnirjhor on 8/10/17.
 */
@Entity
public class Specialist {
    @Id
    private String medicalCenterSpecialistId;
    private String medicalCenterSpecialistName;
    @ManyToOne
    private Facilities facilities;

    public Specialist() {
    }

    public Specialist(String medicalCenterSpecialistId, String medicalCenterSpecialistName, Facilities facilities) {
        this.medicalCenterSpecialistId = medicalCenterSpecialistId;
        this.medicalCenterSpecialistName = medicalCenterSpecialistName;
        this.facilities = facilities;
    }

    public String getMedicalCenterSpecialistId() {
        return medicalCenterSpecialistId;
    }

    public void setMedicalCenterSpecialistId(String medicalCenterSpecialistId) {
        this.medicalCenterSpecialistId = medicalCenterSpecialistId;
    }

    public String getMedicalCenterSpecialistName() {
        return medicalCenterSpecialistName;
    }

    public void setMedicalCenterSpecialistName(String medicalCenterSpecialistName) {
        this.medicalCenterSpecialistName = medicalCenterSpecialistName;
    }

    public Facilities getFacilities() {
        return facilities;
    }

    public void setFacilities(Facilities facilities) {
        this.facilities = facilities;
    }
}

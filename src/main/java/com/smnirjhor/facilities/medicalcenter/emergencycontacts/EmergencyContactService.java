package com.smnirjhor.facilities.medicalcenter.emergencycontacts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by smnirjhor on 8/10/17.
 */
@Service
public class EmergencyContactService {
    @Autowired
    EmergencyContactRepository emergencyContactRepository;


    public List<EmergencyContact> getAllEmergencyContact(String facilityId) {
        return emergencyContactRepository.findByFacilitiesFacilitiesId(facilityId);
    }

    public EmergencyContact getEmergencyContact(String facilityId, String medicalCenterEmergencyContactId) {
        return emergencyContactRepository.findOne(medicalCenterEmergencyContactId);
    }

    public void createEmergencyContact(EmergencyContact emergencyContact) {
        emergencyContactRepository.save(emergencyContact);
    }

    public void updateEmergencyContact(EmergencyContact emergencyContact) {
        emergencyContactRepository.save(emergencyContact);
    }

    public void deleteEmergenncyContact(String medicalCenterEmergencyContactId) {
        emergencyContactRepository.delete(medicalCenterEmergencyContactId);
    }
}

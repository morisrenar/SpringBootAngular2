package com.smnirjhor.facilities.medicalcenter.emergencycontacts;

import com.smnirjhor.facilities.Facilities;
import com.smnirjhor.facilities.medicalcenter.medicine.Medicine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by smnirjhor on 8/10/17.
 */
@RestController
@RequestMapping("/ru/facilities")
public class EmergencyContactController {
    @Autowired
    EmergencyContactService emergencyContactService;

    @RequestMapping(method = RequestMethod.GET, value = "/{facilityId}/emergencyContact")
    public List<EmergencyContact> getAllEmergencyContact(@PathVariable String facilityId) {
        return emergencyContactService.getAllEmergencyContact(facilityId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{facilityId}/emergencyContact/{medicalCenterEmergencyContactId}")
    public EmergencyContact getEmergencyContact(@PathVariable String facilityId, @PathVariable String medicalCenterEmergencyContactId) {
        return emergencyContactService.getEmergencyContact(facilityId, medicalCenterEmergencyContactId);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/{facilityId}/emergencyContact")
    public void createEmergencyContact(@RequestBody EmergencyContact emergencyContact, @PathVariable String facilityId) {
        emergencyContact.setFacilities(new Facilities(facilityId, "", ""));
        emergencyContactService.createEmergencyContact(emergencyContact);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{facilityId}/emergencyContact/{medicalCenterEmergencyContactId}")
    public void updateEmergencyContact(@RequestBody EmergencyContact emergencyContact, @PathVariable String facilityId, @PathVariable String medicalCenterEmergencyContactId) {
        emergencyContact.setFacilities(new Facilities(facilityId, "", ""));
        emergencyContactService.updateEmergencyContact(emergencyContact);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{facilityId}/emergencyContact/{medicalCenterEmergencyContactId}")
    public void deleteEmergencyContact(@PathVariable String facilityId, @PathVariable String medicalCenterEmergencyContactId) {
        emergencyContactService.deleteEmergenncyContact(medicalCenterEmergencyContactId);
    }
}

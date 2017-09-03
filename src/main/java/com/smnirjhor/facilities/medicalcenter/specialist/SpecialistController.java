package com.smnirjhor.facilities.medicalcenter.specialist;

import com.smnirjhor.facilities.Facilities;
import com.smnirjhor.facilities.transportation.routes.Routes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by smnirjhor on 8/10/17.
 */
@RestController
@RequestMapping("/ru/facilities")
public class SpecialistController {

    @Autowired
    SpecialistService specialistService;

    @RequestMapping(method = RequestMethod.GET, value = "/{facilityId}/specialist")
    public List<Specialist> getAllSpecialist(@PathVariable String facilityId) {
        return specialistService.getAllSpecialist(facilityId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{facilityId}/specialist/{medicalCenterSpecialistId}")
    public Specialist getSpecialist(@PathVariable String facilityId, @PathVariable String medicalCenterSpecialistId) {
        return specialistService.getSpecialist(facilityId, medicalCenterSpecialistId);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/{facilityId}/specialist")
    public void createSpecialist(@RequestBody Specialist specialist, @PathVariable String facilityId) {
        specialist.setFacilities(new Facilities(facilityId, "", ""));
        specialistService.createSpecialist(specialist);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{facilityId}/specialist/{medicalCenterSpecialistId}")
    public void updateSpecialist(@RequestBody Specialist specialist, @PathVariable String facilityId, @PathVariable String medicalCenterSpecialistId) {
        specialist.setFacilities(new Facilities(facilityId, "", ""));
        specialistService.updateSpecialist(specialist);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{facilityId}/specialist/{medicalCenterSpecialistId}")
    public void deleteSpecialist(@PathVariable String facilityId, @PathVariable String medicalCenterSpecialistId) {
        specialistService.deleteSpecialist(medicalCenterSpecialistId);
    }

}

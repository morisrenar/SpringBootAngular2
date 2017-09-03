package com.smnirjhor.facilities.medicalcenter.specialist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by smnirjhor on 8/10/17.
 */
@Service
public class SpecialistService {
    @Autowired
    SpecialistRepository specialistRepository;

    public List<Specialist> getAllSpecialist(String facilityId) {
        return specialistRepository.findByFacilitiesFacilitiesId(facilityId);
    }

    public Specialist getSpecialist(String facilityId, String medicalCenterSpecialistId) {
        return specialistRepository.findOne(medicalCenterSpecialistId);
    }

    public void createSpecialist(Specialist specialist) {
        specialistRepository.save(specialist);
    }

    public void updateSpecialist(Specialist specialist) {
        specialistRepository.save(specialist);
    }

    public void deleteSpecialist(String medicalCenterSpecialistId) {
        specialistRepository.delete(medicalCenterSpecialistId);
    }
}

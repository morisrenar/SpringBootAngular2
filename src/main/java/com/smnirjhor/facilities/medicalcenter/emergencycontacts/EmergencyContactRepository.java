package com.smnirjhor.facilities.medicalcenter.emergencycontacts;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by smnirjhor on 8/10/17.
 */
public interface EmergencyContactRepository extends CrudRepository<EmergencyContact, String> {
    public List<EmergencyContact> findByFacilitiesFacilitiesId(String facilitiesId);
}

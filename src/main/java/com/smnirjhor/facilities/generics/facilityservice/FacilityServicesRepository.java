package com.smnirjhor.facilities.generics.facilityservice;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by smnirjhor on 7/24/17.
 */
public interface FacilityServicesRepository extends CrudRepository<FacilityServices, String> {
    public List<FacilityServices> findByFacilitiesFacilitiesId(String facilitiesId);
}

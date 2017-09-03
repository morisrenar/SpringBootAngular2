package com.smnirjhor.facilities.medicalcenter.specialist;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by smnirjhor on 8/10/17.
 */
public interface SpecialistRepository extends CrudRepository<Specialist, String> {
    public List<Specialist> findByFacilitiesFacilitiesId(String facilitiesId);
}

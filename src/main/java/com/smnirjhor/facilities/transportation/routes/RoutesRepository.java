package com.smnirjhor.facilities.transportation.routes;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by smnirjhor on 8/9/17.
 */
public interface RoutesRepository extends CrudRepository<Routes, String> {
    public List<Routes> findByFacilitiesFacilitiesId(String facilitiesId);
}

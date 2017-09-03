package com.smnirjhor.facilities.transportation.time;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by smnirjhor on 8/9/17.
 */
public interface TransportTimeRepository extends CrudRepository<TransportTime, String> {
    public List<TransportTime> findByFacilitiesFacilitiesId(String facilitiesId);
}

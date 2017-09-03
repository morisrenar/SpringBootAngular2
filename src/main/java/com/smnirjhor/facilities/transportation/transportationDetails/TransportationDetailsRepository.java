package com.smnirjhor.facilities.transportation.transportationDetails;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by smnirjhor on 8/10/17.
 */
public interface TransportationDetailsRepository extends CrudRepository<TransportationDetails, String> {
    public List<TransportationDetails> findByFacilitiesFacilitiesId(String facilitiesId);
    public List<TransportationDetails> findByDestinationTransportDestinationId(String facilitiesId);
    public List<TransportationDetails> findByRoutesTransportRoutesId(String facilitiesId);
    public List<TransportationDetails> findByTransportTimeTransportTimeId(String facilitiesId);
}


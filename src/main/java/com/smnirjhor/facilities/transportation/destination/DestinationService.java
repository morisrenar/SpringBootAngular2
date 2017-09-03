package com.smnirjhor.facilities.transportation.destination;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by smnirjhor on 8/9/17.
 */
@Service
public class DestinationService {
    @Autowired
    DestinationRepository destinationRepository;


    public List<Destination> getAllDestinations(String facilityId) {
        return destinationRepository.findByFacilitiesFacilitiesId(facilityId);
    }

    public Destination getDestinations(String facilityId, String transportDestinationId) {
        return destinationRepository.findOne(transportDestinationId);
    }

    public void createDestination(Destination destination) {
        destinationRepository.save(destination);
    }

    public void updateDestination(Destination destination) {
        destinationRepository.save(destination);
    }

    public void deleteDestination(String transportDestinationId) {
        destinationRepository.delete(transportDestinationId);
    }
}

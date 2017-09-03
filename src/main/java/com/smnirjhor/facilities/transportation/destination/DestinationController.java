package com.smnirjhor.facilities.transportation.destination;

import com.smnirjhor.facilities.Facilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by smnirjhor on 8/9/17.
 */
@RestController
@RequestMapping("/ru/facilities")
public class DestinationController {
    @Autowired
    DestinationService destinationService;

    @RequestMapping(method = RequestMethod.GET, value = "/{facilityId}/destinations")
    public List<Destination> getAllDestinations(@PathVariable String facilityId) {
        return destinationService.getAllDestinations(facilityId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{facilityId}/destinations/{transportDestinationId}")
    public Destination getDestination(@PathVariable String facilityId, @PathVariable String transportDestinationId) {
        return destinationService.getDestinations(facilityId, transportDestinationId);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/{facilityId}/destinations")
    public void createDestination(@RequestBody Destination destination, @PathVariable String facilityId) {
        destination.setFacilities(new Facilities(facilityId, "", ""));
        destinationService.createDestination(destination);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{facilityId}/destinations/{transportDestinationId}")
    public void updateDestination(@RequestBody Destination destination, @PathVariable String facilityId, @PathVariable String transportDestinationId) {
        destination.setFacilities(new Facilities(facilityId, "", ""));
        destinationService.updateDestination(destination);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{facilityId}/destinations/{transportDestinationId}")
    public void deleteDestination(@PathVariable String facilityId, @PathVariable String transportDestinationId) {
        destinationService.deleteDestination(transportDestinationId);
    }

}

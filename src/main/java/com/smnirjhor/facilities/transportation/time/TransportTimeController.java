package com.smnirjhor.facilities.transportation.time;

import com.smnirjhor.facilities.Facilities;
import com.smnirjhor.facilities.transportation.routes.Routes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by smnirjhor on 8/9/17.
 */
@RestController
@RequestMapping("/ru/facilities")
public class TransportTimeController {
    @Autowired
    TransportTimeService transportTimeService;

    @RequestMapping(method = RequestMethod.GET, value = "/{facilityId}/transportTime")
    public List<TransportTime> getAllTransportTime(@PathVariable String facilityId) {
        return transportTimeService.getAllTransportTime(facilityId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{facilityId}/transportTime/{transportTimeId}")
    public TransportTime getDestination(@PathVariable String facilityId, @PathVariable String transportTimeId) {
        return transportTimeService.getTransportTime(facilityId, transportTimeId);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/{facilityId}/transportTime")
    public void createTransportTime(@RequestBody TransportTime transportTime, @PathVariable String facilityId) {
        transportTime.setFacilities(new Facilities(facilityId, "", ""));
        transportTimeService.createTransportTime(transportTime);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{facilityId}/transportTime/{transportTimeId}")
    public void updateTransportTime(@RequestBody TransportTime transportTime, @PathVariable String facilityId, @PathVariable String transportTimeId) {
        transportTime.setFacilities(new Facilities(facilityId, "", ""));
        transportTimeService.updateTransporttime(transportTime);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{facilityId}/transportTime/{transportTimeId}")
    public void deleteTransportTime(@PathVariable String facilityId, @PathVariable String transportTimeId) {
        transportTimeService.deleteTransportTime(transportTimeId);
    }
}

package com.smnirjhor.facilities.transportation.routes;

import com.smnirjhor.facilities.Facilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by smnirjhor on 8/9/17.
 */
@RestController
@RequestMapping("/ru/facilities")
public class RoutesController {
    @Autowired
    RoutesService routesService;

    @RequestMapping(method = RequestMethod.GET, value = "/{facilityId}/routes")
    public List<Routes> getAllRoutes(@PathVariable String facilityId) {
        return routesService.getAllRoutes(facilityId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{facilityId}/routes/{transportRoutesId}")
    public Routes getDestination(@PathVariable String facilityId, @PathVariable String transportRoutesId) {
        return routesService.getRoutes(facilityId, transportRoutesId);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/{facilityId}/routes")
    public void createRoutes(@RequestBody Routes routes, @PathVariable String facilityId) {
        routes.setFacilities(new Facilities(facilityId, "", ""));
        routesService.createRoutes(routes);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{facilityId}/routes/{transportRoutesId}")
    public void updateRoutes(@RequestBody Routes routes, @PathVariable String facilityId, @PathVariable String transportRoutesId) {
        routes.setFacilities(new Facilities(facilityId, "", ""));
        routesService.updateRoutes(routes);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{facilityId}/routes/{transportRoutesId}")
    public void deleteRoutes(@PathVariable String facilityId, @PathVariable String transportRoutesId) {
        routesService.deleteRoutes(transportRoutesId);
    }
}

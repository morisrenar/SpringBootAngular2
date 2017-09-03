package com.smnirjhor.facilities.transportation.routes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by smnirjhor on 8/9/17.
 */
@Service
public class RoutesService {
    @Autowired
    RoutesRepository routesRepository;

    public List<Routes> getAllRoutes(String facilityId) {
        return routesRepository.findByFacilitiesFacilitiesId(facilityId);
    }

    public Routes getRoutes(String facilityId, String transportRoutesId) {
        return routesRepository.findOne(transportRoutesId);
    }

    public void createRoutes(Routes routes) {
        routesRepository.save(routes);
    }

    public void updateRoutes(Routes routes) {
        routesRepository.save(routes);
    }

    public void deleteRoutes(String transportRoutesId) {
        routesRepository.delete(transportRoutesId);
    }
}

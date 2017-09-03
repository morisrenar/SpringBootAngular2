package com.smnirjhor.facilities.transportation.time;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by smnirjhor on 8/9/17.
 */
@Service
public class TransportTimeService {
    @Autowired
    TransportTimeRepository transportTimeRepository;

    public List<TransportTime> getAllTransportTime(String facilityId) {
        return transportTimeRepository.findByFacilitiesFacilitiesId(facilityId);
    }

    public TransportTime getTransportTime(String facilityId, String transportTimeId) {
        return transportTimeRepository.findOne(transportTimeId);
    }

    public void createTransportTime(TransportTime transportTime) {
        transportTimeRepository.save(transportTime);
    }

    public void updateTransporttime(TransportTime transportTime) {
        transportTimeRepository.save(transportTime);
    }

    public void deleteTransportTime(String transportTimeId) {
        transportTimeRepository.delete(transportTimeId);
    }
}

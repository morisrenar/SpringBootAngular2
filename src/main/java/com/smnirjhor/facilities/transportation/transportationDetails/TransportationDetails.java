package com.smnirjhor.facilities.transportation.transportationDetails;

import com.smnirjhor.facilities.Facilities;
import com.smnirjhor.facilities.transportation.destination.Destination;
import com.smnirjhor.facilities.transportation.routes.Routes;
import com.smnirjhor.facilities.transportation.time.TransportTime;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * Created by smnirjhor on 8/10/17.
 */
@Entity
public class TransportationDetails {

    @Id
    private String transportationDetailsId;
    private String transportationDetailsName;
    private String transportationDetailsInfo;
    @ManyToOne
    private Facilities facilities;
    @ManyToOne
    private Destination destination;
    @ManyToOne
    private Routes routes;
    @ManyToOne
    private TransportTime transportTime;

    public TransportationDetails() {
    }

    public TransportationDetails(String transportationDetailsId, String transportationDetailsName, String transportationDetailsInfo, Facilities facilities, Destination destination, Routes routes, TransportTime transportTime) {
        this.transportationDetailsId = transportationDetailsId;
        this.transportationDetailsName = transportationDetailsName;
        this.transportationDetailsInfo = transportationDetailsInfo;
        this.facilities = facilities;
        this.destination = destination;
        this.routes = routes;
        this.transportTime = transportTime;
    }

    public String getTransportationDetailsId() {
        return transportationDetailsId;
    }

    public void setTransportationDetailsId(String transportationDetailsId) {
        this.transportationDetailsId = transportationDetailsId;
    }

    public String getTransportationDetailsName() {
        return transportationDetailsName;
    }

    public void setTransportationDetailsName(String transportationDetailsName) {
        this.transportationDetailsName = transportationDetailsName;
    }

    public String getTransportationDetailsInfo() {
        return transportationDetailsInfo;
    }

    public void setTransportationDetailsInfo(String transportationDetailsInfo) {
        this.transportationDetailsInfo = transportationDetailsInfo;
    }

    public Facilities getFacilities() {
        return facilities;
    }

    public void setFacilities(Facilities facilities) {
        this.facilities = facilities;
    }

    public Destination getDestination() {
        return destination;
    }

    public void setDestination(Destination destination) {
        this.destination = destination;
    }

    public Routes getRoutes() {
        return routes;
    }

    public void setRoutes(Routes routes) {
        this.routes = routes;
    }

    public TransportTime getTransportTime() {
        return transportTime;
    }

    public void setTransportTime(TransportTime transportTime) {
        this.transportTime = transportTime;
    }
}

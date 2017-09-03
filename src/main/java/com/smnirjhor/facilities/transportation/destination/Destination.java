package com.smnirjhor.facilities.transportation.destination;

import com.smnirjhor.facilities.Facilities;
import com.smnirjhor.facilities.transportation.TransportationInfo;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * Created by smnirjhor on 8/9/17.
 */
@Entity
public class Destination {
    @Id
    private String transportDestinationId;
    private String transportDestinationName;

    @ManyToOne
    private Facilities facilities;

    public Destination() {
    }

    public Destination(String transportDestinationId, String transportDestinationName, Facilities facilities) {
        this.transportDestinationId = transportDestinationId;
        this.transportDestinationName = transportDestinationName;
        this.facilities = facilities;
    }

    public String getTransportDestinationId() {
        return transportDestinationId;
    }

    public void setTransportDestinationId(String transportDestinationId) {
        this.transportDestinationId = transportDestinationId;
    }

    public String getTransportDestinationName() {
        return transportDestinationName;
    }

    public void setTransportDestinationName(String transportDestinationName) {
        this.transportDestinationName = transportDestinationName;
    }

    public Facilities getFacilities() {
        return facilities;
    }

    public void setFacilities(Facilities facilities) {
        this.facilities = facilities;
    }
}

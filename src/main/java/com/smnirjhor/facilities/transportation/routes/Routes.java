package com.smnirjhor.facilities.transportation.routes;

import com.smnirjhor.facilities.Facilities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * Created by smnirjhor on 8/9/17.
 */
@Entity
public class Routes {
    @Id
    private String transportRoutesId;
    private String transportRoutesName;
    @ManyToOne
    private Facilities facilities;

    public Routes() {
    }

    public Routes(String transportRoutesId, String transportRoutesName, Facilities facilities) {
        this.transportRoutesId = transportRoutesId;
        this.transportRoutesName = transportRoutesName;
        this.facilities = facilities;
    }

    public String getTransportRoutesId() {
        return transportRoutesId;
    }

    public void setTransportRoutesId(String transportRoutesId) {
        this.transportRoutesId = transportRoutesId;
    }

    public String getTransportRoutesName() {
        return transportRoutesName;
    }

    public void setTransportRoutesName(String transportRoutesName) {
        this.transportRoutesName = transportRoutesName;
    }

    public Facilities getFacilities() {
        return facilities;
    }

    public void setFacilities(Facilities facilities) {
        this.facilities = facilities;
    }


}

package com.smnirjhor.facilities.transportation.time;

import com.smnirjhor.facilities.Facilities;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * Created by smnirjhor on 8/9/17.
 */
@Entity
public class TransportTime {
    @Id
    private String transportTimeId;
    private String transportTimeTable;
    @ManyToOne
    private Facilities facilities;

    public TransportTime() {
    }

    public TransportTime(String transportTimeId, String transportTimeTable, Facilities facilities) {
        this.transportTimeId = transportTimeId;
        this.transportTimeTable = transportTimeTable;
        this.facilities = facilities;
    }

    public String getTransportTimeId() {
        return transportTimeId;
    }

    public void setTransportTimeId(String transportTimeId) {
        this.transportTimeId = transportTimeId;
    }

    public String getTransportTimeTable() {
        return transportTimeTable;
    }

    public void setTransportTimeTable(String transportTimeTable) {
        this.transportTimeTable = transportTimeTable;
    }

    public Facilities getFacilities() {
        return facilities;
    }

    public void setFacilities(Facilities facilities) {
        this.facilities = facilities;
    }
}

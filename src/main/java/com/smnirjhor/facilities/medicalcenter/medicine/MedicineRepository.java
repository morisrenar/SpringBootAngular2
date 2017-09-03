package com.smnirjhor.facilities.medicalcenter.medicine;

import com.smnirjhor.facilities.generics.events.Events;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by smnirjhor on 7/28/17.
 */
public interface MedicineRepository extends CrudRepository<Medicine, String> {
    public List<Medicine> findByFacilitiesFacilitiesId(String facilitiesId);
}

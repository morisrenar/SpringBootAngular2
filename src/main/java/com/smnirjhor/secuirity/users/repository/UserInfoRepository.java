package com.smnirjhor.secuirity.users.repository;

import com.smnirjhor.secuirity.users.entity.UserInfo;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by smnirjhor on 7/30/17.
 */
public interface UserInfoRepository extends CrudRepository<UserInfo, String> {

}

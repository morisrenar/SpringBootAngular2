package com.smnirjhor.dummycontroller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by smnirjhor on 7/30/17.
 */
@RestController
public class DummyController {

    @RequestMapping("/global/Bitch")
    public String globalBitch() {
        return "global bitch";
    }

    @PreAuthorize("hasRole('USER')")
    @RequestMapping("/user/Bitch")
    public String userBitch() {
        return "user bitch";
    }

    @RequestMapping("/guest/Bitch")
    public String guestBitch() {
        return "guest bitch";
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping("/admin/Bitch")
    public String adminBitch() {
        return "admin bitch";
    }

}

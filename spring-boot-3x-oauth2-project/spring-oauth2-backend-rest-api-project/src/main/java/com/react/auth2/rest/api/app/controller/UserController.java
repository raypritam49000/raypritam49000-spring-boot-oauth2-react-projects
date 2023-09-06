package com.react.auth2.rest.api.app.controller;

import com.react.auth2.rest.api.app.exception.ResourceNotFoundException;
import com.react.auth2.rest.api.app.model.User;
import com.react.auth2.rest.api.app.repository.UserRepository;
import com.react.auth2.rest.api.app.security.CurrentUser;
import com.react.auth2.rest.api.app.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }

}

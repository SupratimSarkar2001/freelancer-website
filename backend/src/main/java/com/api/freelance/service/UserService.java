package com.api.freelance.service;

import com.api.freelance.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {
    List<User> getAllUser();
    User createUser(User user);
    Optional<User> getUserById(Long Id);
    User getUserByEmailAndPassword(String email,String password);
}

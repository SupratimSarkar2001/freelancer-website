package com.api.freelance.controller;

import com.api.freelance.entity.User;
import com.api.freelance.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;
    @GetMapping
    public ResponseEntity<List<User>> getAllUser(){
        List<User> allUser=userService.getAllUser();
        return new ResponseEntity<>(allUser,HttpStatus.OK);
    }
    /*
    EXAMPLE - http://localhost:9000/api/users/register
    Body- {
           "name":"Supratim Sarkar",
           "email":"s@gmail.com",
           "password":"1234",
           "phone":"1234567890",
           "type":"Freelancer"
           }
     */
    @CrossOrigin
    @PostMapping("/register")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User createdUser = userService.createUser(user);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    /*
    EXAMPLE: http://localhost:9000/api/users/login?
     */
    @CrossOrigin
    @GetMapping("/login")
    public ResponseEntity<User> getUserByEmailAndPassword(
            @RequestParam String email,
            @RequestParam String password) {
        User user = userService.getUserByEmailAndPassword(email, password);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> u = userService.getUserById(id);

        if (u.isPresent()) {
            return ResponseEntity.ok(u.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

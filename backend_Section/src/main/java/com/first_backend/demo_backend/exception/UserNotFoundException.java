package com.first_backend.demo_backend.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("could not find the user with id" + id);
    }
}

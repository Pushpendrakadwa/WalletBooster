package com.stackroute.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT,reason = "Invalid credentials")
public class UsrAlreadyExistsException extends Throwable{
}

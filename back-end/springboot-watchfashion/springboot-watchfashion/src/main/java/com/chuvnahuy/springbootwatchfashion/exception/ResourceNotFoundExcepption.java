package com.chuvnahuy.springbootwatchfashion.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class ResourceNotFoundExcepption extends RuntimeException{


	private static final long serialVersionUID = 1L;
    
	public ResourceNotFoundExcepption(String message) {
		super(message);
	}

 
}

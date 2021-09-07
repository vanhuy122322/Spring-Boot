package com.chuvnahuy.springbootwatchfashion.service;

import java.util.HashMap;

import org.springframework.stereotype.Service;

import com.chuvnahuy.springbootwatchfashion.models.User;




@Service
public interface UserService {
	public User findByUsername(String username) throws Exception;
	public User getUserDetailById(long userId) throws Exception;
	
}

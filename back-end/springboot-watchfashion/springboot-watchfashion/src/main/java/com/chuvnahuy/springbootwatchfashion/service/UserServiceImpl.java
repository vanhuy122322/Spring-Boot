package com.chuvnahuy.springbootwatchfashion.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chuvnahuy.springbootwatchfashion.models.User;
import com.chuvnahuy.springbootwatchfashion.repository.UserRepository;





@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepo;
	
	@Override
	public User findByUsername(String username) throws Exception {
		return userRepo.findByUsername(username).orElseThrow(()->new Exception("User Not found.."));
	}
	@Override
	public User getUserDetailById(long userId) throws Exception {
		
		return userRepo.findById(userId).orElseThrow(()->new Exception("User Not found.."));
	}


}

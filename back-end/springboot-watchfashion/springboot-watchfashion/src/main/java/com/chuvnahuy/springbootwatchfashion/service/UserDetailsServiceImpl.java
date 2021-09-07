package com.chuvnahuy.springbootwatchfashion.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chuvnahuy.springbootwatchfashion.JWTConfiguration.UserPrincipal;
import com.chuvnahuy.springbootwatchfashion.models.User;
import com.chuvnahuy.springbootwatchfashion.repository.UserRepository;




@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserService userService;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(username)
				.orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

		return UserDetailsImpl.build(user);
	}
	 @Transactional
	    public UserDetails loadUserById(Long id) {
	    	try {
	   		 User user = userService.getUserDetailById(id);
	   	        return UserPrincipal.create(user);
		   	}catch(Exception e) {
		   		throw new UsernameNotFoundException("User not found with id : " + id);
		   	}   
	        //return UserPrincipal.create(user);
	    }


}

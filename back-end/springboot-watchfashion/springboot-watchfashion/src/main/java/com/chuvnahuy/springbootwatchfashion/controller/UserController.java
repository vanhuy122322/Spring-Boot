package com.chuvnahuy.springbootwatchfashion.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chuvnahuy.springbootwatchfashion.exception.ResourceNotFoundExcepption;
import com.chuvnahuy.springbootwatchfashion.models.Product;
import com.chuvnahuy.springbootwatchfashion.models.User;
import com.chuvnahuy.springbootwatchfashion.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {
	
	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	private UserRepository userRepository;
	
	
	@GetMapping("/change-user/{id}")
	public ResponseEntity<User> getUserssById(@PathVariable Long id) {
		User product = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundExcepption("User not exits with id:" + id));
		return ResponseEntity.ok(product);
	}
	
	
	@PutMapping("/update-user/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User productDetails) {
		User product = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundExcepption("User not exits with id:" + id));
		product.setUsername(productDetails.getUsername());
		product.setName(productDetails.getName());
		product.setEmail(productDetails.getEmail());
		product.setPhone(productDetails.getPhone());
		product.setAddress(productDetails.getAddress());
		product.setPassword(encoder.encode(productDetails.getPassword()));
		User updateuser= userRepository.save(product);
		return ResponseEntity.ok(updateuser);
	}

}

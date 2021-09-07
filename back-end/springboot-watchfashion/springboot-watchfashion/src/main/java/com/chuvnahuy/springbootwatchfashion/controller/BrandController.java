package com.chuvnahuy.springbootwatchfashion.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chuvnahuy.springbootwatchfashion.models.Brand;
import com.chuvnahuy.springbootwatchfashion.repository.BrandRepository;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class BrandController {
	@Autowired
	private BrandRepository brandRepository;

			@GetMapping("/brand")
		public List<Brand> getAllBrand() {
			return brandRepository.findAll();
		}
}

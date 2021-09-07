package com.chuvnahuy.springbootwatchfashion.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chuvnahuy.springbootwatchfashion.models.Slider;
import com.chuvnahuy.springbootwatchfashion.repository.SliderRepository;




@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class SliderController {

	@Autowired
	private SliderRepository sliderRepository;

	//get all employees
		@GetMapping("/slider")
		public List<Slider> getAllSliders() {
			return sliderRepository.findAll();
		}
}

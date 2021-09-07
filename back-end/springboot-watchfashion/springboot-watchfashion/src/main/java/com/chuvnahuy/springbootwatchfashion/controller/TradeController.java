package com.chuvnahuy.springbootwatchfashion.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chuvnahuy.springbootwatchfashion.models.Trade;
import com.chuvnahuy.springbootwatchfashion.repository.TradeRepository;





@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class TradeController {

	@Autowired
	private TradeRepository tradeRepository;

	//get all employees
		@GetMapping("/trade")
		public List<Trade> getAllTrade() {
			return tradeRepository.findAll();
		}
}

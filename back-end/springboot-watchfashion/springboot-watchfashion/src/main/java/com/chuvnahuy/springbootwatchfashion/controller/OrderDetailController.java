package com.chuvnahuy.springbootwatchfashion.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.chuvnahuy.springbootwatchfashion.models.OrderDetail;

import com.chuvnahuy.springbootwatchfashion.repository.OrderDetailRepository;


@RestController
@RequestMapping
public class OrderDetailController {
	@Autowired
	private OrderDetailRepository orderDetailRepository;
	
	@PostMapping("/order")
	public void Test(@RequestBody List<OrderDetail> myOrder) {
		orderDetailRepository.saveAll(myOrder);
	}
	@GetMapping("/order-detail/{id}")
	public ResponseEntity<List<OrderDetail>> getOrderDetailById(@PathVariable String id) {
		return new ResponseEntity<>(orderDetailRepository.ListOrders(id), HttpStatus.OK);
	}
	@DeleteMapping("/delete-detail/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteOrder(@PathVariable String id){
		OrderDetail orderdetail= orderDetailRepository.getOrder(id);
		orderDetailRepository.delete(orderdetail);
		Map<String, Boolean> response =new HashMap<>();
		return ResponseEntity.ok(response);
	}
}

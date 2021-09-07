package com.chuvnahuy.springbootwatchfashion.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.chuvnahuy.springbootwatchfashion.exception.ResourceNotFoundExcepption;
import com.chuvnahuy.springbootwatchfashion.models.Brand;
import com.chuvnahuy.springbootwatchfashion.models.Order;
import com.chuvnahuy.springbootwatchfashion.models.Product;
import com.chuvnahuy.springbootwatchfashion.repository.OrderRepository;





@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class OrderController {
	@Autowired
	private OrderRepository orderRepository;
	
	@PostMapping("/infos")
	public Order createForm(@RequestBody Order order) {
		return orderRepository.save(order);
	}
	
	@GetMapping("/listorder/{user_id}")
	public ResponseEntity<List<Order>> getOrder(@PathVariable Long user_id){
		return new ResponseEntity<>(orderRepository.ListOrders(user_id), HttpStatus.OK);
	}
	
	@GetMapping("/order/{id}")
	public ResponseEntity<Order> getOrderDetailById(@PathVariable String id) {
		return new ResponseEntity<>(orderRepository.ListOrderDetail(id), HttpStatus.OK);
	}

	@DeleteMapping("/deleteorder/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteOrder(@PathVariable String id){
		Order order= orderRepository.getOrder(id);
		
		orderRepository.delete(order);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	@GetMapping("/listorder/order")
	public List<Order> getAllOrderProduct() {
		return orderRepository.findAll();
	}
}

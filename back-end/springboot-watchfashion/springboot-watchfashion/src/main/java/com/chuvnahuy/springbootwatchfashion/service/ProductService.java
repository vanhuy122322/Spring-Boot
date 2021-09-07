package com.chuvnahuy.springbootwatchfashion.service;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.chuvnahuy.springbootwatchfashion.models.Product;


public interface ProductService {
	//List<Product> findAll(String id);
	public List<Product> listAllContainsIgnoreCase(String title); 
	public Product createProduct(@PathVariable(value = "category_id") Long category_id, @PathVariable(value = "brand_id") Long brand_id,@RequestBody Product product);
}

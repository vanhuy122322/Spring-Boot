package com.chuvnahuy.springbootwatchfashion.service;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.chuvnahuy.springbootwatchfashion.models.Product;
import com.chuvnahuy.springbootwatchfashion.models.RelateProduct;

public interface RelateProductService {
	public RelateProduct createrelateProduct(@PathVariable(value = "relate_id") Long relate_id,@RequestBody RelateProduct relateproduct);
}

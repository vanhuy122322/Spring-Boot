package com.chuvnahuy.springbootwatchfashion.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.chuvnahuy.springbootwatchfashion.models.Brand;
import com.chuvnahuy.springbootwatchfashion.models.Category;
import com.chuvnahuy.springbootwatchfashion.models.Product;
import com.chuvnahuy.springbootwatchfashion.models.RelateProduct;
import com.chuvnahuy.springbootwatchfashion.repository.ProductRepository;
import com.chuvnahuy.springbootwatchfashion.repository.RelateProductRepository;

@Service
public class RelateProductServiceImpl implements RelateProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private RelateProductRepository relateproductRepository;
	
	public RelateProduct createrelateProduct(@PathVariable(value = "relate_id") Long relate_id,@RequestBody RelateProduct relateproduct) {
                relateproduct.setRelate_id(relate_id);
               
//				List<Rdproduct> productrelated = new ArrayList<Rdproduct>();
//				List<ProductImages> productimage = new ArrayList<ProductImages>();
//				List<Salient> salien = new ArrayList<Salient>();
//				product.setProductrelate(new HashSet<ProductRelated>() {
//					/**
//					 * 
//					 */
//					private static final long serialVersionUID = -5619441967802709713L;
		//
//					{
//						for (ProductRelated news2 : productrelated) {
//							
//							add(news2);
//						}
//						
//					}});
//				List<News> news = new ArrayList<News>();
//				product.setProductimage(new HashSet<ProductImages>() {
//					/**
//					 * 
//					 */
//					private static final long serialVersionUID = -5619441967802709713L;
		//
//					{
//						for (ProductImages news2 : productimage) {
//							
//							add(news2);
//						}
//						
//					}});
//				product.setNews(new HashSet<News>() {
//					/**
//					 * 
//					 */
//					private static final long serialVersionUID = -5619441967802709713L;
		//
//					{
//						for (News news2 : news) {
//							
//							add(news2);
//						}
//						
//					}});
//				product.setSalient(new HashSet<Salient>() {
//					/**
//					 * 
//					 */
//					private static final long serialVersionUID = -5619441967802709713L;
		//
//					{
//						for (Salient news2 : salien) {
//							
//							add(news2);
//						}
//						
//					}});
		        return relateproductRepository.save(relateproduct);
		    }

}

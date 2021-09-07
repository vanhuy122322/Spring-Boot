package com.chuvnahuy.springbootwatchfashion.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.chuvnahuy.springbootwatchfashion.models.Brand;
import com.chuvnahuy.springbootwatchfashion.models.Category;
import com.chuvnahuy.springbootwatchfashion.models.Product;
import com.chuvnahuy.springbootwatchfashion.repository.BrandRepository;
import com.chuvnahuy.springbootwatchfashion.repository.CategoryRepository;
import com.chuvnahuy.springbootwatchfashion.repository.ProductRepository;








@Service
public class ProductServiceImpl implements ProductService  {
	
		@Autowired
		private ProductRepository productRepository;
		
		@Autowired
		private CategoryRepository categoryRepository;
		@Autowired
		private BrandRepository brandRepository;
	//  public List<Product> findAll(String id) {
		//  return null;
	 // }
	  
	  public List<Product> listAllContainsIgnoreCase(String title) {
	        if (title != null) {
	            return productRepository.findByTitleContainsIgnoreCase(title);
	        }
	        return null;
	    }
	  
	  public Product getProductsById(long productId) throws Exception {
			return productRepository.findById(productId).orElseThrow(() ->new Exception("Product is not found"));
		}
	  public Product createProduct(@PathVariable(value = "category_id") Long category_id,@PathVariable(value = "brand_id") Long brand_id,@RequestBody Product product) {	
			
			Brand bra = brandRepository.getOne(brand_id);
			product.setBrand(bra);
			Category cate = categoryRepository.getOne(category_id);
			product.setCategory(cate);
//			List<Rdproduct> productrelated = new ArrayList<Rdproduct>();
//			List<ProductImages> productimage = new ArrayList<ProductImages>();
//			List<Salient> salien = new ArrayList<Salient>();
//			product.setProductrelate(new HashSet<ProductRelated>() {
//				/**
//				 * 
//				 */
//				private static final long serialVersionUID = -5619441967802709713L;
	//
//				{
//					for (ProductRelated news2 : productrelated) {
//						
//						add(news2);
//					}
//					
//				}});
//			List<News> news = new ArrayList<News>();
//			product.setProductimage(new HashSet<ProductImages>() {
//				/**
//				 * 
//				 */
//				private static final long serialVersionUID = -5619441967802709713L;
	//
//				{
//					for (ProductImages news2 : productimage) {
//						
//						add(news2);
//					}
//					
//				}});
//			product.setNews(new HashSet<News>() {
//				/**
//				 * 
//				 */
//				private static final long serialVersionUID = -5619441967802709713L;
	//
//				{
//					for (News news2 : news) {
//						
//						add(news2);
//					}
//					
//				}});
//			product.setSalient(new HashSet<Salient>() {
//				/**
//				 * 
//				 */
//				private static final long serialVersionUID = -5619441967802709713L;
	//
//				{
//					for (Salient news2 : salien) {
//						
//						add(news2);
//					}
//					
//				}});
	        return productRepository.save(product);
	    }

	
}

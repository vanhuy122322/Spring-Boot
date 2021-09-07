package com.chuvnahuy.springbootwatchfashion.controller;



import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.chuvnahuy.springbootwatchfashion.exception.ResourceNotFoundExcepption;
import com.chuvnahuy.springbootwatchfashion.models.Accessories;
import com.chuvnahuy.springbootwatchfashion.models.Product;
import com.chuvnahuy.springbootwatchfashion.repository.AccessoriesRepository;
import com.chuvnahuy.springbootwatchfashion.repository.ProductRepository;
import com.chuvnahuy.springbootwatchfashion.service.ProductServiceImpl;




@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ProductController {
	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private ProductServiceImpl productService;
	@Autowired
	private AccessoriesRepository accessoriesRepository;
	
	
	//get all employees
		@GetMapping("/newproduct")
		public List<Product> getAllProductsNew(){
			List<Product> listProducts=productRepository.findAllProductsNew();
			return listProducts;
		}
		@GetMapping("/saleproduct")
		public List<Product> getAllProductsSale(){
			List<Product> listProducts=productRepository.findAllProductsSale();
			return listProducts;
		}
		@GetMapping("/product/product-detail/{id}")
		public ResponseEntity<Product> getProductById(@PathVariable Long id) {
			Product product=productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundExcepption("Product not exist with id:"+id));
			return ResponseEntity.ok(product);
		}
		@GetMapping("/fashionproduct")
		public List<Product> getAllProductsAppo(){
			List<Product> listProducts=productRepository.findAllProductsAppo();
			return listProducts;
		}
		@GetMapping("/coproduct")
		public List<Product> getAllProductsCo(){
			List<Product> listProducts=productRepository.findAllProductsCo();
			return listProducts;
		}
		
		@GetMapping("/pinproduct")
		public List<Product> getAllProductsPin(){
			List<Product> listProducts=productRepository.findAllProductsPin();
			return listProducts;
		}
		@GetMapping("/product")
		 Page<Product> getAllProduct(
		            @RequestParam Optional<Integer> page,
		            @RequestParam Optional<String> sortBy
		    ) {
		        return productRepository.findAll(
		                PageRequest.of(
		                        page.orElse(1),
		                        6,
		                        Sort.Direction.ASC, sortBy.orElse("id")
		                )
		        );
		    }
		@GetMapping("/product/{category_id}")
		public ResponseEntity<Page<Product>> getProductByCategory(@PathVariable Integer category_id, @RequestParam Optional<Integer> page,
	            @RequestParam Optional<String> sortBy){
			return new ResponseEntity<>(productRepository.getProductByCategory(category_id,PageRequest.of(
                    page.orElse(1),
                    5,
                    Sort.Direction.ASC, sortBy.orElse("category_id")
            )), HttpStatus.OK);
		}
		
		@GetMapping("/product/brand/{brand_id}")
		public ResponseEntity<Page<Product>> getProductByBrand(@PathVariable Integer brand_id, @RequestParam Optional<Integer> page,
	            @RequestParam Optional<String> sortBy){
			return new ResponseEntity<>(productRepository.getProductByBrand(brand_id,PageRequest.of(
                    page.orElse(1),
                    5,
                    Sort.Direction.ASC, sortBy.orElse("category_id")
            )), HttpStatus.OK);
		}
		
		@GetMapping("product/product/{id}")
		public List<Product> getProductRelate(@PathVariable Long id) {
			List<Product> listProducts=productRepository.getProductRelate(id);
			return listProducts;
		}


		@GetMapping("/tutorials")
		public ResponseEntity<List<Product>> getAllProducts(@RequestParam(required = false) String title) {
			try {
				List<Product> Products = new ArrayList<Product>();

				if (title == null)
					return null;
				else
					productService.listAllContainsIgnoreCase(title).forEach(Products::add);

				if (Products.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}

				return new ResponseEntity<>(Products, HttpStatus.OK);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		
		@GetMapping("/accessories")
		public List<Accessories> getAllaccessoriesNew(){
			return accessoriesRepository.findAll();
		}
		@GetMapping("accessories/accessories/{id}")
		public List<Accessories> getaccessoriesRelate(@PathVariable Long id) {
			List<Accessories> listProducts=accessoriesRepository.getAccessoriesRelate(id);
			return listProducts;
		}
		@GetMapping("/accessories/accessories-detail/{id}")
		public ResponseEntity<Accessories> getaccessoriesById(@PathVariable Long id) {
			Accessories product=accessoriesRepository.findById(id).orElseThrow(() -> new ResourceNotFoundExcepption("Product not exist with id:"+id));
			return ResponseEntity.ok(product);
		}
		
	
		@GetMapping("/sale/productsale")
		 Page<Product> getSaleProduct(
		            @RequestParam Optional<Integer> page,
		            @RequestParam Optional<String> sortBy
		    ) {
		        return productRepository.findAll(
		                PageRequest.of(
		                        page.orElse(1),
		                        10,
		                        Sort.Direction.ASC, sortBy.orElse("id")
		                )
		        );
		    }
}

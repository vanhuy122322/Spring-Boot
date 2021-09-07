package com.chuvnahuy.springbootwatchfashion.controller.Admin;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.chuvnahuy.springbootwatchfashion.exception.ResourceNotFoundExcepption;
import com.chuvnahuy.springbootwatchfashion.models.Blog;
import com.chuvnahuy.springbootwatchfashion.models.Brand;
import com.chuvnahuy.springbootwatchfashion.models.Category;
import com.chuvnahuy.springbootwatchfashion.models.Menu;
import com.chuvnahuy.springbootwatchfashion.models.Policy;
import com.chuvnahuy.springbootwatchfashion.models.Product;
import com.chuvnahuy.springbootwatchfashion.models.RelateProduct;
import com.chuvnahuy.springbootwatchfashion.models.Slider;
import com.chuvnahuy.springbootwatchfashion.models.User;
import com.chuvnahuy.springbootwatchfashion.repository.BlogRepository;
import com.chuvnahuy.springbootwatchfashion.repository.BrandRepository;
import com.chuvnahuy.springbootwatchfashion.repository.CategoryRepository;
import com.chuvnahuy.springbootwatchfashion.repository.MenuRepository;
import com.chuvnahuy.springbootwatchfashion.repository.PolicyRepository;
import com.chuvnahuy.springbootwatchfashion.repository.ProductRepository;
import com.chuvnahuy.springbootwatchfashion.repository.RelateProductRepository;
import com.chuvnahuy.springbootwatchfashion.repository.SliderRepository;
import com.chuvnahuy.springbootwatchfashion.repository.UserRepository;
import com.chuvnahuy.springbootwatchfashion.service.ProductService;
import com.chuvnahuy.springbootwatchfashion.service.RelateProductService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin/")
public class AdminController {
	@Autowired
	private ProductRepository productReponsitory;
	
	@Autowired
	private BrandRepository brandReponsitory;
	
	@Autowired
	private CategoryRepository categoryReponsitory;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private MenuRepository menuRepository;
	
	@Autowired
	private SliderRepository sliderRepository;
	
	@Autowired
	private BlogRepository blogRepository;
	
	@Autowired
	private PolicyRepository policyRepository;
	
	@Autowired
	private ProductService productService;
	
	@Autowired
	private RelateProductRepository relateproductService;
	
	@Autowired
	private RelateProductService relproductService;
	
// Product
//get-product-by-id
	@GetMapping("/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable Long id) {
		Product product = productReponsitory.findById(id)
				.orElseThrow(() -> new ResourceNotFoundExcepption("Product not exits with id:" + id));
		return ResponseEntity.ok(product);
	}
	
	@GetMapping("/product/allproduct")
	public List<Product> getfindAllProduct() {
		
		return productReponsitory.findAll();
	}

	// save-product
	@PostMapping("/product/add/{category_id}/{brand_id}")
    public Product createProduct(@PathVariable(value = "category_id") Long category_id,@PathVariable(value = "brand_id") Long brand_id,@RequestBody Product product) {	
        return productService.createProduct(category_id,brand_id,product);
    }

	// update employee rest api
	@PutMapping("/editproduct/{id}")
	public ResponseEntity<Product> updateEmployee(@PathVariable Long id, @RequestBody Product productDetails) {
		Product product = productReponsitory.findById(id)
				.orElseThrow(() -> new ResourceNotFoundExcepption("Product not exits with id:" + id));
		
		product.setTitle(productDetails.getTitle());
  
		product.setDiameter(productDetails.getDiameter());
		product.setDescription(productDetails.getDescription());
		product.setDiscount(productDetails.getDiscount());
		product.setEnergysources(productDetails.getEnergysources());
		product.setFacethickness(productDetails.getFacethickness());
		product.setFramematerial(productDetails.getFramematerial());
		product.setGender(productDetails.getGender());
		product.setImage(productDetails.getImage());
		product.setRelateimage(productDetails.getRelateimage());
		product.setRelateimage1(productDetails.getRelateimage1());
		product.setMaterial(productDetails.getMaterial());
		product.setOrigin(productDetails.getOrigin());
		product.setPrice(productDetails.getPrice());
		product.setSell(productDetails.getSell());
		product.setStatus(productDetails.getStatus());
		product.setWaterfroof(productDetails.getWaterfroof());
		product.setWirematerial(productDetails.getWirematerial());
		product.setWirewidth(productDetails.getWirewidth());
		product.setBrand(productDetails.getBrand());
		product.setCategory(productDetails.getCategory());
		product.setPromotion(productDetails.getPromotion());
		
		
		Product updatedproduct = productReponsitory.save(product);
		return ResponseEntity.ok(updatedproduct);
	}

	// create employee rest api
	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
		Product product = productReponsitory.findById(id)
				.orElseThrow(() -> new ResourceNotFoundExcepption("Product not exits with id:" + id));

		productReponsitory.delete(product);
		Map<String, Boolean> response = new HashMap<>();
		response.put("delete", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	// get-all-admin-product
	@GetMapping("/all-product")
    Page<Product> getAllProduct(
            @RequestParam Optional<Integer> page,
            @RequestParam Optional<String> sortBy
    ) {
        return productReponsitory.findAll(
                PageRequest.of(
                        page.orElse(1),
                        10,
                        Sort.Direction.ASC, sortBy.orElse("id")
                )
        );
    }
	
	/////////////////////////////////////////////////////////////////////////////////
	
	//Brand
	
	
	@GetMapping("/detailbrand/{id}")
	public ResponseEntity<Brand> getBrandById(@PathVariable Long id) {
		Brand brand = brandReponsitory.findById(id)
				.orElseThrow(() -> new ResourceNotFoundExcepption("Brand not exits with id:" + id));
		return ResponseEntity.ok(brand);
	}
	
	// get-all-admin-product
	@GetMapping("/brand")
	Page<Brand> getAllBrand(
            @RequestParam Optional<Integer> page,
            @RequestParam Optional<String> sortBy
    ) {
        return brandReponsitory.findAll(
                PageRequest.of(
                        page.orElse(1),
                        10,
                        Sort.Direction.ASC, sortBy.orElse("id")
                )
        );
    }
		
	
	@DeleteMapping("/brand/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteBrand(@PathVariable Long id) {
		Brand brand = brandReponsitory.findById(id)
				.orElseThrow(() -> new ResourceNotFoundExcepption("Brand not exits with id:" + id));

		brandReponsitory.delete(brand);
		Map<String, Boolean> response = new HashMap<>();
		response.put("delete", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	// update employee rest api
		@PutMapping("/brand/{id}")
		public ResponseEntity<Brand> updateBrand(@PathVariable Long id, @RequestBody Brand brandDetails) {
			Brand brand = brandReponsitory.findById(id)
					.orElseThrow(() -> new ResourceNotFoundExcepption("Product not exits with id:" + id));
			
			brand.setDescription(brandDetails.getDescription());
			brand.setTitle(brandDetails.getTitle());
			
			
			Brand updatedproduct = brandReponsitory.save(brand);
			return ResponseEntity.ok(updatedproduct);
		}
		
		@PostMapping("/addBrand")
		public Brand createBrand(@RequestBody Brand brand) {
			return brandReponsitory.save(brand);
		}
	
	/////////////////////////////////////////////
		
		/////category
		@GetMapping("/detailcategory/{id}")
		public ResponseEntity<Category> getCategoryById(@PathVariable Long id) {
			Category category = categoryReponsitory.findById(id)
					.orElseThrow(() -> new ResourceNotFoundExcepption("Brand not exits with id:" + id));
			return ResponseEntity.ok(category);
		}
		
		// get-all-admin-category
		@GetMapping("/category")
		Page<Category> getAllCategory(
	            @RequestParam Optional<Integer> page,
	            @RequestParam Optional<String> sortBy
	    ) {
	        return categoryReponsitory.findAll(
	                PageRequest.of(
	                        page.orElse(1),
	                        10,
	                        Sort.Direction.ASC, sortBy.orElse("id")
	                )
	        );
	    }
			
		
		@DeleteMapping("/category/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteCategory(@PathVariable Long id) {
			Category category = categoryReponsitory.findById(id)
					.orElseThrow(() -> new ResourceNotFoundExcepption("Brand not exits with id:" + id));

			categoryReponsitory.delete(category);
			Map<String, Boolean> response = new HashMap<>();
			response.put("delete", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		
		// update employee rest api
			@PutMapping("/category/{id}")
			public ResponseEntity<Category> updateBrand(@PathVariable Long id, @RequestBody Category categoryDetails) {
				Category category = categoryReponsitory.findById(id)
						.orElseThrow(() -> new ResourceNotFoundExcepption("Product not exits with id:" + id));
				
				category.setImage(categoryDetails.getImage());
				category.setName(categoryDetails.getName());
				category.setDescription(categoryDetails.getDescription());
				
				Category updatedproduct = categoryReponsitory.save(category);
				return ResponseEntity.ok(updatedproduct);
			}
			
			@PostMapping("/addCategory")
			public Category createCategory(@RequestBody Category brand) {
				return categoryReponsitory.save(brand);
			}
		
		
		///////////////////////user//////////////////
			
			@GetMapping("/user")
			Page<User> getAllUser(
		            @RequestParam Optional<Integer> page,
		            @RequestParam Optional<String> sortBy
		    ) {
		        return userRepository.findAll(
		                PageRequest.of(
		                        page.orElse(1),
		                        10,
		                        Sort.Direction.ASC, sortBy.orElse("id")
		                )
		        );
		    }
			
			@GetMapping("/user_detail/{id}")
			public ResponseEntity<User> getUserById(@PathVariable Long id) {
				User brand = userRepository.findById(id)
						.orElseThrow(() -> new ResourceNotFoundExcepption("Brand not exits with id:" + id));
				return ResponseEntity.ok(brand);
			}
			/////////////////////////////////
			
			////////////////////menu//////////////////
			
			@GetMapping("/detailmenu/{id}")
			public ResponseEntity<Menu> getMenuById(@PathVariable Long id) {
				Menu brand = menuRepository.findById(id)
						.orElseThrow(() -> new ResourceNotFoundExcepption("Brand not exits with id:" + id));
				return ResponseEntity.ok(brand);
			}
			
			// get-all-admin-product
			@GetMapping("/menu")
			Page<Menu> getAllMenu(
		            @RequestParam Optional<Integer> page,
		            @RequestParam Optional<String> sortBy
		    ) {
		        return menuRepository.findAll(
		                PageRequest.of(
		                        page.orElse(1),
		                        10,
		                        Sort.Direction.ASC, sortBy.orElse("id")
		                )
		        );
		    }
				
			
			@DeleteMapping("/menu/{id}")
			public ResponseEntity<Map<String, Boolean>> deleteMẹnu(@PathVariable Long id) {
				Menu brand = menuRepository.findById(id)
						.orElseThrow(() -> new ResourceNotFoundExcepption("Menu not exits with id:" + id));

				menuRepository.delete(brand);
				Map<String, Boolean> response = new HashMap<>();
				response.put("delete", Boolean.TRUE);
				return ResponseEntity.ok(response);
			}
			
			// update employee rest api
				@PutMapping("/menu/{id}")
				public ResponseEntity<Menu> updateMenu(@PathVariable Long id, @RequestBody Menu brandDetails) {
					Menu menu = menuRepository.findById(id)
							.orElseThrow(() -> new ResourceNotFoundExcepption("Product not exits with id:" + id));
					
					menu.setName(brandDetails.getName());
					menu.setRowguid(brandDetails.getRowguid());
					
					
					Menu updatedproduct = menuRepository.save(menu);
					return ResponseEntity.ok(updatedproduct);
				}
				
				@PostMapping("/addMenu")
				public Menu createBrand(@RequestBody Menu menu) {
					return menuRepository.save(menu);
				}
			
			///////////////////////////////////////
	
             ///////////////////slider////////////////////
				@GetMapping("/detailslider/{id}")
				public ResponseEntity<Slider> getSliderById(@PathVariable Long id) {
					Slider brand = sliderRepository.findById(id)
							.orElseThrow(() -> new ResourceNotFoundExcepption("Brand not exits with id:" + id));
					return ResponseEntity.ok(brand);
				}
				
				// get-all-admin-product
				@GetMapping("/slider")
				Page<Slider> getAllSlider(
			            @RequestParam Optional<Integer> page,
			            @RequestParam Optional<String> sortBy
			    ) {
			        return sliderRepository.findAll(
			                PageRequest.of(
			                        page.orElse(1),
			                        10,
			                        Sort.Direction.ASC, sortBy.orElse("id")
			                )
			        );
			    }
					
				
				@DeleteMapping("/slider/{id}")
				public ResponseEntity<Map<String, Boolean>> deleteSlider(@PathVariable Long id) {
					Slider brand = sliderRepository.findById(id)
							.orElseThrow(() -> new ResourceNotFoundExcepption("Slider not exits with id:" + id));

					sliderRepository.delete(brand);
					Map<String, Boolean> response = new HashMap<>();
					response.put("delete", Boolean.TRUE);
					return ResponseEntity.ok(response);
				}
				
				// update employee rest api
					@PutMapping("/slider/{id}")
					public ResponseEntity<Slider> updateSlider(@PathVariable Long id, @RequestBody Slider brandDetails) {
						Slider menu = sliderRepository.findById(id)
								.orElseThrow(() -> new ResourceNotFoundExcepption("Slider not exits with id:" + id));
						
						menu.setTitle(brandDetails.getTitle());
						menu.setImage(brandDetails.getImage());
						
						
						Slider updatedproduct = sliderRepository.save(menu);
						return ResponseEntity.ok(updatedproduct);
					}
					
					@PostMapping("/addSlider")
					public Slider createSlider(@RequestBody Slider menu) {
						return sliderRepository.save(menu);
					}
					
					/////////////////////////////blog////////////////////////////////////////
					@PostMapping("/addBlog")
					public Blog createBlog(@RequestBody Blog menu) {
						return blogRepository.save(menu);
					}
					@GetMapping("/detailblog/{id}")
					public ResponseEntity<Blog> getBlogById(@PathVariable Long id) {
						Blog brand = blogRepository.findById(id)
								.orElseThrow(() -> new ResourceNotFoundExcepption("Brand not exits with id:" + id));
						return ResponseEntity.ok(brand);
					}
					
					// get-all-admin-product
					@GetMapping("/blog")
					Page<Blog> getAllBlog(
				            @RequestParam Optional<Integer> page,
				            @RequestParam Optional<String> sortBy
				    ) {
				        return blogRepository.findAll(
				                PageRequest.of(
				                        page.orElse(1),
				                        10,
				                        Sort.Direction.ASC, sortBy.orElse("id")
				                )
				        );
				    }
						
					
					@DeleteMapping("/blog/{id}")
					public ResponseEntity<Map<String, Boolean>> deleteBlog(@PathVariable Long id) {
						Blog brand = blogRepository.findById(id)
								.orElseThrow(() -> new ResourceNotFoundExcepption("Slider not exits with id:" + id));

						blogRepository.delete(brand);
						Map<String, Boolean> response = new HashMap<>();
						response.put("delete", Boolean.TRUE);
						return ResponseEntity.ok(response);
					}
					
					// update employee rest api
						@PutMapping("/blog/{id}")
						public ResponseEntity<Blog> updateblog(@PathVariable Long id, @RequestBody Blog brandDetails) {
							Blog menu = blogRepository.findById(id)
									.orElseThrow(() -> new ResourceNotFoundExcepption("Slider not exits with id:" + id));
							
							menu.setTitle(brandDetails.getTitle());
							menu.setImage(brandDetails.getImage());
							menu.setDescription(brandDetails.getDescription());
							menu.setState(brandDetails.getState());
							menu.setModifieddate(brandDetails.getModifieddate());
							Blog updatedproduct = blogRepository.save(menu);
							return ResponseEntity.ok(updatedproduct);
						}
						
						////////////////////////////relateproduct///////////////////
				
						@PostMapping("/addRelateProduct")
						public RelateProduct createRelateProduct(@RequestBody RelateProduct brand) {
							return relateproductService.save(brand);
						}
						@PostMapping("/relateproduct/add/{relate_id}/{product_id}")
					    public RelateProduct createRelateProduct(@PathVariable(value = "relate_id") Long relate_id,@RequestBody RelateProduct relateproduct) {	
					        return relproductService.createrelateProduct(relate_id,relateproduct);
					    }
						////////////////////////////policy///////////////////
						@PostMapping("/addPolicy")
						public Policy createpolyci(@RequestBody Policy menu) {
							return policyRepository.save(menu);
						}
						@GetMapping("/detailpolicy/{id}")
						public ResponseEntity<Policy> getPolicyById(@PathVariable Long id) {
							Policy brand = policyRepository.findById(id)
									.orElseThrow(() -> new ResourceNotFoundExcepption("Brand not exits with id:" + id));
							return ResponseEntity.ok(brand);
						}
						
						// get-all-admin-product
						@GetMapping("/policy")
						Page<Policy> getAllPolicy(
					            @RequestParam Optional<Integer> page,
					            @RequestParam Optional<String> sortBy
					    ) {
					        return policyRepository.findAll(
					                PageRequest.of(
					                        page.orElse(1),
					                        10,
					                        Sort.Direction.ASC, sortBy.orElse("id")
					                )
					        );
					    }
							
						
						@DeleteMapping("/policy/{id}")
						public ResponseEntity<Map<String, Boolean>> deletePolicy(@PathVariable Long id) {
							Policy brand = policyRepository.findById(id)
									.orElseThrow(() -> new ResourceNotFoundExcepption("Slider not exits with id:" + id));

							policyRepository.delete(brand);
							Map<String, Boolean> response = new HashMap<>();
							response.put("delete", Boolean.TRUE);
							return ResponseEntity.ok(response);
						}
						
						// update employee rest api
							@PutMapping("/policy/{id}")
							public ResponseEntity<Policy> updatepolicy(@PathVariable Long id, @RequestBody Policy brandDetails) {
								Policy menu = policyRepository.findById(id)
										.orElseThrow(() -> new ResourceNotFoundExcepption("Slider not exits with id:" + id));
								
								menu.setName(brandDetails.getName());
								menu.setDescription(brandDetails.getDescription());
							
								Policy updatedproduct = policyRepository.save(menu);
								return ResponseEntity.ok(updatedproduct);
							}
}

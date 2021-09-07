package com.chuvnahuy.springbootwatchfashion.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chuvnahuy.springbootwatchfashion.exception.ResourceNotFoundExcepption;
import com.chuvnahuy.springbootwatchfashion.models.Blog;
import com.chuvnahuy.springbootwatchfashion.models.Product;
import com.chuvnahuy.springbootwatchfashion.repository.BlogRepository;






@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class BlogController {
	@Autowired
	private BlogRepository blogRepository;

			@GetMapping("/blog")
		public List<Blog> getHotBlog() {
				List<Blog> listProducts=blogRepository.findBlog();
				return listProducts;
			}

		
		@GetMapping("/allyear")
		public List<Blog> getYearBlog() {
			return blogRepository.findDate();
		}
		@GetMapping("/blod-detail/{id}")
		public ResponseEntity<Blog> getBlogById(@PathVariable Long id) {
			Blog product = blogRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundExcepption("Blog not exits with id:" + id));
			return ResponseEntity.ok(product);
		}

		@GetMapping("/allblog")
		public List<Blog> getallBlog() {
			return blogRepository.findallblog();
		}
		@GetMapping("/allsell")
		public List<Blog> getallselll() {
			return blogRepository.findallsell();
		}
}

package com.chuvnahuy.springbootwatchfashion.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.chuvnahuy.springbootwatchfashion.exception.ResourceNotFoundExcepption;
import com.chuvnahuy.springbootwatchfashion.models.Blog;
import com.chuvnahuy.springbootwatchfashion.models.Contact;
import com.chuvnahuy.springbootwatchfashion.models.Menu;
import com.chuvnahuy.springbootwatchfashion.models.Policy;
import com.chuvnahuy.springbootwatchfashion.repository.ContactRepository;
import com.chuvnahuy.springbootwatchfashion.repository.MenuRepository;
import com.chuvnahuy.springbootwatchfashion.repository.PolicyRepository;






@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class MenuController {
	@Autowired
	private MenuRepository menuRepository;

	@Autowired
	private PolicyRepository policyRepository;
	
	@Autowired
	private ContactRepository contactRepository;
	
	//get all employees
		@GetMapping("/menu")
		public List<Menu> getAllMenus() {
			return menuRepository.findAll();
		}
		@GetMapping("/policy")
		public List<Policy> getAllPolicy() {
			return policyRepository.findAll();
		}
		@GetMapping("/detailpolicy/{id}")
		public ResponseEntity<Policy> getPolicyById(@PathVariable Long id) {
			Policy brand = policyRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundExcepption("Brand not exits with id:" + id));
			return ResponseEntity.ok(brand);
		}
		
		@GetMapping("/detailcontact/{id}")
		public ResponseEntity<Contact> getcontactById(@PathVariable Long id) {
			Contact brand = contactRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundExcepption("Brand not exits with id:" + id));
			return ResponseEntity.ok(brand);
		}
		@PostMapping("/addContact")
		public Contact createContact(@RequestBody Contact menu) {
			return contactRepository.save(menu);
		}
		@GetMapping("/contact")
		Page<Contact> getAllContact(
	            @RequestParam Optional<Integer> page,
	            @RequestParam Optional<String> sortBy
	    ) {
	        return contactRepository.findAll(
	                PageRequest.of(
	                        page.orElse(1),
	                        10,
	                        Sort.Direction.ASC, sortBy.orElse("id")
	                )
	        );
	    }
			
}

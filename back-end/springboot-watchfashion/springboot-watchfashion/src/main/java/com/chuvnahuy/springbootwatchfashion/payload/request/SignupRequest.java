package com.chuvnahuy.springbootwatchfashion.payload.request;

import java.util.Set;

import javax.validation.constraints.*;
 
public class SignupRequest {
    @NotBlank
    @Size(min = 3, max = 20)
    private String username;
 

    @NotBlank
    @Size(min=10,max = 40)
    @Email
    private String email;
    
    
    @NotBlank
    @Size(min = 6, max = 12)
    private String phone;
    
    @NotBlank
    @Size(min = 3, max = 20)
    private String name;
    
    @NotBlank
    @Size(max = 100)
    private String address;
    
    private Set<String> role;
    
   
    
    @NotBlank
    @Size(min = 6, max = 40)
    private String password;
  
   
    
    


	public String getUsername() {
        return username;
    }
 
    public void setUsername(String username) {
        this.username = username;
    }
 
    public String getEmail() {
        return email;
    }
 
    public void setEmail(String email) {
        this.email = email;
    }
 
    public String getPassword() {
        return password;
    }
 
    public void setPassword(String password) {
        this.password = password;
    }
    
    
    public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Set<String> getRole() {
      return this.role;
    }
    
    public void setRole(Set<String> role) {
      this.role = role;
    }
}

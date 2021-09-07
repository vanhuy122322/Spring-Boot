package com.chuvnahuy.springbootwatchfashion.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.transaction.Transactional;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "add_to_cart")
public class AddtoCart {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long id;
	@JsonIgnore
	
	@OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "product_id")
	Product product;
	//Long product_id;
	int qty;
	double price;
	Long user_id;
	@Column(updatable=false, insertable=false)
	String added_date;
	
	@Transient
	String productName;
	
	@Transient
	long productPrice;
	
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getAdded_date() {
		return added_date;
	}
	public void setAdded_date(String added_date) {
		this.added_date = added_date;
	}
	 Long getUser_id() {
		return user_id;
	}
	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}

	public String getProductName() {
		return product.getTitle();
	}
	
	public long getProductPrice() {
		return product.getPrice();
	}
	
}

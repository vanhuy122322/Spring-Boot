package com.chuvnahuy.springbootwatchfashion.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="orderdetails")
public class OrderDetail {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id_detail_order;
	@Column(name = "id")
	private long id;
	@Column(name = "id_order")
	private String id_order;
	@Column(name = "title")
	private String title;
	@Column(name = "quantity")
	private long quantity;
	@Column(name = "price")
	private String price;
	@Column(name = "image")
	private String image;
	public OrderDetail() {
		
	}
	public OrderDetail(long id, String id_order, String title, long quantity, String price, String image) {
		super();
		this.id = id;
		this.id_order = id_order;
		this.title = title;
		this.quantity = quantity;
		this.price = price;
		this.image = image;
	}
	public long getId_detail_order() {
		return id_detail_order;
	}
	public void setId_detail_order(long id_detail_order) {
		this.id_detail_order = id_detail_order;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getId_order() {
		return id_order;
	}
	public void setId_order(String id_order) {
		this.id_order = id_order;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public long getQuantity() {
		return quantity;
	}
	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	
}

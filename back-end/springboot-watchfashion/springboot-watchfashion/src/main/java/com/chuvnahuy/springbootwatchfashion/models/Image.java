package com.chuvnahuy.springbootwatchfashion.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity(name = "image")
@Table(name = "image")
public class Image {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column(name = "image")
	private String image;
	
	@ManyToOne
	@JoinColumn(name = "product_image")
	  private Product product;
	public Image() {
		
	}
	public Image(String image) {
		super();
		this.image = image;
	}
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	

	

	
}

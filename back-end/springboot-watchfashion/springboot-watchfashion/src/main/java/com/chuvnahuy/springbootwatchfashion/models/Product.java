package com.chuvnahuy.springbootwatchfashion.models;

import java.util.ArrayList;
import java.util.List;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity(name = "product")
@Table(name = "product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column(name = "title")
	private String title;
	@Column(name = "description")
	private String description;

	@Column(name = "origin")
	private String origin;
	@Column(name = "price")
	private long price;
	@Column(name = "price_net")
	private long price_net;
	@Column(name = "discount")
	private long discount;
	@Column(name = "image")
	private String image;
	@Column(name = "diameter")
	private String diameter;
	@Column(name = "material")
	private String material;
	@Column(name = "framematerial")
	private String framematerial;
	@Column(name = "facethickness")
	private String facethickness;

	@Column(name = "promotion")
	private String promotion;

	@Column(name = "sell")
	private String sell;
	
	@Column(name = "wirematerial")
	private String wirematerial;
	@Column(name = "wirewidth")
	private String wirewidth;
	@Column(name = "waterfroof")
	private String waterfroof;

	@Column(name = "energysources")
	private String energysources;
	@Column(name = "gender")
	private String gender;
	@Column(name = "status")
	private long status;
	
	
	@Column(name = "relateimage")
	private String relateimage;
	
	@Column(name = "relateimage1")
	private String relateimage1;
	
	@OneToMany(mappedBy = "product")
	private List<RelateProduct> relateproduct=new ArrayList<>();
	
	@OneToMany(mappedBy = "product")
	private List<Image> imageproduct=new ArrayList<>();
	
	public List<Image> getImageproduct() {
		return imageproduct;
	}
	public void setImageproduct(List<Image> imageproduct) {
		this.imageproduct = imageproduct;
	}
	public List<RelateProduct> getRelateproduct() {
		return relateproduct;
	}
	public void setRelateproduct(List<RelateProduct> relateproduct) {
		this.relateproduct = relateproduct;
	}
	
	public Product() {
		// TODO Auto-generated constructor stub
	}

	
	
	public String getRelateimage() {
		return relateimage;
	}
	public void setRelateimage(String relateimage) {
		this.relateimage = relateimage;
	}
	
	public Product(String title, String description, String origin, long price, long price_net, long discount,
			String image, String diameter, String material, String framematerial, String facethickness,
			String promotion, String sell, String wirematerial, String wirewidth, String waterfroof,
			String energysources, String gender, long status, String relateimage, String relateimage1) {
		super();
		this.title = title;
		this.description = description;
		this.origin = origin;
		this.price = price;
		this.price_net = price_net;
		this.discount = discount;
		this.image = image;
		this.diameter = diameter;
		this.material = material;
		this.framematerial = framematerial;
		this.facethickness = facethickness;
		this.promotion = promotion;
		this.sell = sell;
		this.wirematerial = wirematerial;
		this.wirewidth = wirewidth;
		this.waterfroof = waterfroof;
		this.energysources = energysources;
		this.gender = gender;
		this.status = status;
		this.relateimage = relateimage;
		this.relateimage1 = relateimage1;
	}
	
	public long getId() {
		return id;
	}
	public String getRelateimage1() {
		return relateimage1;
	}
	public void setRelateimage1(String relateimage1) {
		this.relateimage1 = relateimage1;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getOrigin() {
		return origin;
	}
	public void setOrigin(String origin) {
		this.origin = origin;
	}
	public long getPrice() {
		return price;
	}
	public void setPrice(long price) {
		this.price = price;
	}
	public long getPrice_net() {
		return price_net;
	}
	public void setPrice_net(long price_net) {
		this.price_net = price_net;
	}
	public long getDiscount() {
		return discount;
	}
	public void setDiscount(long discount) {
		this.discount = discount;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getDiameter() {
		return diameter;
	}
	public void setDiameter(String diameter) {
		this.diameter = diameter;
	}
	public String getMaterial() {
		return material;
	}
	public void setMaterial(String material) {
		this.material = material;
	}
	public String getFramematerial() {
		return framematerial;
	}
	public void setFramematerial(String framematerial) {
		this.framematerial = framematerial;
	}
	public String getFacethickness() {
		return facethickness;
	}
	public void setFacethickness(String facethickness) {
		this.facethickness = facethickness;
	}
	public String getWirematerial() {
		return wirematerial;
	}
	public void setWirematerial(String wirematerial) {
		this.wirematerial = wirematerial;
	}
	public String getWirewidth() {
		return wirewidth;
	}
	public void setWirewidth(String wirewidth) {
		this.wirewidth = wirewidth;
	}
	public String getWaterfroof() {
		return waterfroof;
	}
	public void setWaterfroof(String waterfroof) {
		this.waterfroof = waterfroof;
	}
	public String getEnergysources() {
		return energysources;
	}
	public void setEnergysources(String energysources) {
		this.energysources = energysources;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public long getStatus() {
		return status;
	}
	public void setStatus(long status) {
		this.status = status;
	}

	
	
	  public String getSell() {
		return sell;
	}
	public void setSell(String sell) {
		this.sell = sell;
	}



	public String getPromotion() {
		return promotion;
	}
	public void setPromotion(String promotion) {
		this.promotion = promotion;
	}


	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	@ManyToOne
	  @JoinColumn(name = "category_id") private Category category;
	  public Category getCategory() { return category; }
	  public void setCategory(Category category) { this.category = category; }
	  
	  @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	  @ManyToOne
	  @JoinColumn(name = "brand_id") private Brand brand;
	public Brand getBrand() {
		return brand;
	}
	public void setBrand(Brand brand) {
		this.brand = brand;
	}
	  
	  
	 
}

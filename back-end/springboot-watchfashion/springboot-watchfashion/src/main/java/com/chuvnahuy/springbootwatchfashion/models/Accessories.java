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

@Entity(name = "accessories")
@Table(name = "accessories")
public class Accessories {
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
	@Column(name = "image")
	private String image;
	@Column(name = "sell")
	private String sell;
	@Column(name = "status")
	private long status;
	@Column(name = "wiretype")
	private String wiretype;
	@Column(name = "wirewidth")
	private String wirewidth;
	@Column(name = "wirematerial")
	private String wirematerial;
	@Column(name = "color")
	private String color;
	
	@Column(name = "relateimage")
	private String relateimage;
	
	@Column(name = "relateimage1")
	private String relateimage1;
	
	
	@OneToMany(mappedBy = "accessories")
	private List<RelateAccessories> relateaccessories=new ArrayList<>();
	public Accessories() {
		
	}
	public List<RelateAccessories> getRelateAccessories() {
		return relateaccessories;
	}
	public void setRelateAccessories(List<RelateAccessories> relateaccessories) {
		this.relateaccessories = relateaccessories;
	}
	

	public Accessories(String title, String description, String origin, long price, long price_net, String image,
			String sell, long status, String wiretype, String wirewidth, String wirematerial, String color,
			String relateimage, String relateimage1) {
		super();
		this.title = title;
		this.description = description;
		this.origin = origin;
		this.price = price;
		this.price_net = price_net;
		this.image = image;
		this.sell = sell;
		this.status = status;
		this.wiretype = wiretype;
		this.wirewidth = wirewidth;
		this.wirematerial = wirematerial;
		this.color = color;
		this.relateimage = relateimage;
		this.relateimage1 = relateimage1;
	}
	public String getRelateimage() {
		return relateimage;
	}
	public void setRelateimage(String relateimage) {
		this.relateimage = relateimage;
	}
	public String getRelateimage1() {
		return relateimage1;
	}
	public void setRelateimage1(String relateimage1) {
		this.relateimage1 = relateimage1;
	}
	public long getId() {
		return id;
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

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getSell() {
		return sell;
	}

	public void setSell(String sell) {
		this.sell = sell;
	}

	public long getStatus() {
		return status;
	}

	public void setStatus(long status) {
		this.status = status;
	}

	public String getWiretype() {
		return wiretype;
	}

	public void setWiretype(String wiretype) {
		this.wiretype = wiretype;
	}

	public String getWirewidth() {
		return wirewidth;
	}

	public void setWirewidth(String wirewidth) {
		this.wirewidth = wirewidth;
	}

	public String getWirematerial() {
		return wirematerial;
	}

	public void setWirematerial(String wirematerial) {
		this.wirematerial = wirematerial;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}
	
	
	
}

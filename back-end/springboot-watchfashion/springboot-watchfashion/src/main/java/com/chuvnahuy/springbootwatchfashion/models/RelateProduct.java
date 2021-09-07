package com.chuvnahuy.springbootwatchfashion.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import javax.persistence.Table;

@Entity(name = "relateproduct")
@Table(name = "relateproduct")
public class RelateProduct {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column(name = "relate_id")
	private long relate_id;

	@ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
	


public RelateProduct() {
	
}

	public RelateProduct(long relate_id) {
	super();
	this.relate_id = relate_id;
}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}



	public long getRelate_id() {
		return relate_id;
	}

	public void setRelate_id(long relate_id) {
		this.relate_id = relate_id;
	}

	
	
}

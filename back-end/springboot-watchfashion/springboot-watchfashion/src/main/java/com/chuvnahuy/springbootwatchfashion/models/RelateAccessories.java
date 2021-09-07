package com.chuvnahuy.springbootwatchfashion.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity(name = "relateaccessories")
@Table(name = "relateaccessories")
public class RelateAccessories {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column(name = "relate_id")
	private long relate_id;

	@ManyToOne
    @JoinColumn(name = "accessories_id")
    private Accessories accessories;
public RelateAccessories() {

	
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

package com.chuvnahuy.springbootwatchfashion.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.chuvnahuy.springbootwatchfashion.models.OrderDetail;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
	
	
	 @Query(value="SELECT * From orderdetails where orderdetails.id_order=?1",nativeQuery=true) 
	 public List<OrderDetail> ListOrders(String id);
	  
	  @Query(value="SELECT * From orderdetails where orderdetails.id=?1", nativeQuery=true) 
	  public OrderDetail getOrder(String id);
	
}

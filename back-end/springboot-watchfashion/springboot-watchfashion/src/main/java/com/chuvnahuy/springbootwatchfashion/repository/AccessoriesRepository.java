package com.chuvnahuy.springbootwatchfashion.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.chuvnahuy.springbootwatchfashion.models.Accessories;



@Repository
public interface AccessoriesRepository extends JpaRepository<Accessories, Long>{
	
	@Query( value="SELECT * FROM accessories P RIGHT JOIN relateaccessories rp on (P.id=rp.accessories_id) where rp.relate_id=?1 ", nativeQuery=true)
	public List<Accessories> getAccessoriesRelate(long id);
	
}

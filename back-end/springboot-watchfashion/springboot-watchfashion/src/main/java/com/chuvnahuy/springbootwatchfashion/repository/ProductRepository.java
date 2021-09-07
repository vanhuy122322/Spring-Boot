package com.chuvnahuy.springbootwatchfashion.repository;




import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.chuvnahuy.springbootwatchfashion.models.Product;




@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{

	@Query(value="select * from product P where P.status=1", nativeQuery=true)
	public List<Product> findAllProductsNew();
	
	@Query(value="select * from product P where P.status=2", nativeQuery=true)
	public List<Product> findAllProductsSale();
	
	@Query(value="select * from product P where P.category_id=3", nativeQuery=true)
	public List<Product> findAllProductsAppo();
	
	@Query(value="select * from product P where P.category_id=2", nativeQuery=true)
	public List<Product> findAllProductsCo();
	
	@Query(value="select * from product P where P.category_id=1", nativeQuery=true)
	public List<Product> findAllProductsPin();
	
	@Query(value="select * from product P where P.category_id=?1", nativeQuery=true)
	public Page<Product> getProductByCategory(Integer category_id,Pageable pageable);
	
	
	@Query(value="select * from product P where P.status=2", nativeQuery=true)
	public Page<Product> getProductSale(Pageable pageable);
	

	@Query(value="select * from product P where P.brand_id=?1", nativeQuery=true)
	public Page<Product> getProductByBrand(Integer brand_id,Pageable pageable);

	@Query( value="SELECT * FROM product P RIGHT JOIN relateproduct rp on (P.id=rp.product_id) where rp.relate_id=?1 ", nativeQuery=true)
	public List<Product> getProductRelate(long id);
	
	@Query(value="SELECT p FROM product p WHERE CONCAT(p.title, ' ', p.price) LIKE %?1%", nativeQuery=true)
	public List<Product> search(String keyword);
	
	
	@Query(value="SELECT * FROM product p WHERE CONCAT(p.title,p.description,p.origin, p.price) LIKE %?1%", nativeQuery=true)
	List<Product> findByTitleContainsIgnoreCase(String title);
	
	
	
}

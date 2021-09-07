package com.chuvnahuy.springbootwatchfashion.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.chuvnahuy.springbootwatchfashion.models.Blog;





@Repository
public interface BlogRepository extends JpaRepository<Blog, Long>{
	

	@Query(value="select * from blogs b where b.state= 1", nativeQuery=true)
	public List<Blog> findBlog();
	
	@Query(value="select * from blogs b where b.state= 2", nativeQuery=true)
	public List<Blog> findDate();
	
	@Query(value="select * from blogs b where b.state= 3", nativeQuery=true)
	public List<Blog> findallblog();
	
	@Query(value="select * from blogs b where b.state= 4", nativeQuery=true)
	public List<Blog> findallsell();
}

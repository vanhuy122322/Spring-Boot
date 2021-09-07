package com.chuvnahuy.springbootwatchfashion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chuvnahuy.springbootwatchfashion.models.RelateProduct;



@Repository
public interface RelateProductRepository extends JpaRepository<RelateProduct, Long> {

}

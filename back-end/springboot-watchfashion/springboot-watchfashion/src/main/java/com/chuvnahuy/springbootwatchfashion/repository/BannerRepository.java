package com.chuvnahuy.springbootwatchfashion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chuvnahuy.springbootwatchfashion.models.Banner;



@Repository
public interface BannerRepository extends JpaRepository<Banner, Long>{

}
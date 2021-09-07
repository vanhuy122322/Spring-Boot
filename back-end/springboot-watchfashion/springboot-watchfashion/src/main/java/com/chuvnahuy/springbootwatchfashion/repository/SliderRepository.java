package com.chuvnahuy.springbootwatchfashion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chuvnahuy.springbootwatchfashion.models.Slider;



@Repository
public interface SliderRepository extends JpaRepository<Slider, Long>{

}
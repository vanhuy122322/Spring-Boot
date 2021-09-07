package com.chuvnahuy.springbootwatchfashion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.chuvnahuy.springbootwatchfashion.models.Policy;

@Repository
public interface PolicyRepository extends JpaRepository<Policy, Long> {

}

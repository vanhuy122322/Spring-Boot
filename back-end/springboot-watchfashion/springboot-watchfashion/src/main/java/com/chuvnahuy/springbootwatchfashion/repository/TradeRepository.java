package com.chuvnahuy.springbootwatchfashion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chuvnahuy.springbootwatchfashion.models.Trade;



@Repository
public interface TradeRepository extends JpaRepository<Trade, Long> {

}

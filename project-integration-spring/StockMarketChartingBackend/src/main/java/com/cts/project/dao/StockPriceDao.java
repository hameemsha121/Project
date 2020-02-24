package com.cts.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.project.bean.StockPrice;

public interface StockPriceDao  extends JpaRepository<StockPrice, Integer>{

}

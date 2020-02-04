package com.cts.training.controller;

import java.time.LocalDate;
import java.time.LocalTime;

import com.cts.training.dao.StockPriceDAO;
import com.cts.training.daoimpl.StockPriceDAOImpl;
import com.cts.training.model.StockPrice;

public class StockPriceController {

	public static void main(String[] args) {
		LocalDate date = LocalDate.now();
		LocalTime time = LocalTime.now();
		
		StockPrice stockPrice = new StockPrice(101, 101, 237774L, date,time);
		
		StockPriceDAO stockPriceDAO = new StockPriceDAOImpl();
		
		stockPriceDAO.addStockPrice(stockPrice);
	}
}

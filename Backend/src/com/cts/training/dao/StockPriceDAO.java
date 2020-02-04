package com.cts.training.dao;

import java.util.List;

import com.cts.training.model.StockPrice;

public interface StockPriceDAO {

	public boolean addStockPrice(StockPrice stockPrice);

	public boolean updateStockPrice(StockPrice stockPrice);

	public boolean deleteStockPrice(StockPrice stockPrice);

	public StockPrice getStockPriceById(int id);

	public List<StockPrice> getAllStockPrices();
	
}

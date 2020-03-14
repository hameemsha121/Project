package com.cts.training.exchangeservice;

import java.util.List;

public interface ExchangeService {

	
	public List<StockExchange> getAllStockExchange();
	public StockExchange saveStockExchange(StockExchange exchange);
	public StockExchange getExchangeById(int id);
	public void deleteStockExchange(int id);
	public StockExchange updateExchange(StockExchange exchange);
}

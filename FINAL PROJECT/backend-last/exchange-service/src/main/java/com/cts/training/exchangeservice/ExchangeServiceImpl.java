package com.cts.training.exchangeservice;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ExchangeServiceImpl implements ExchangeService{

	@Autowired
	StockExchangeDAO exchangeDAO;
	
	
	@Override
	public List<StockExchange> getAllStockExchange()
	{
		return exchangeDAO.findAll();
	}
	
	@Override
	public StockExchange saveStockExchange( StockExchange exchange)
	{
		StockExchange newExchange=exchangeDAO.save(exchange);
		return newExchange;
	}
	
	@Override
	public StockExchange getExchangeById( int id) throws NoSuchElementException
	{
		Optional<StockExchange> exchangeList=exchangeDAO.findById(id);
		StockExchange exchange=exchangeList.get();
		return exchange;
	}
	
	@Override
	public void deleteStockExchange(int id)
	{
		exchangeDAO.deleteById(id);
	}

	
	@Override
	public StockExchange updateExchange(StockExchange exchange)
	{
		StockExchange updateExchange=exchangeDAO.save(exchange);
		return updateExchange;
	}


}

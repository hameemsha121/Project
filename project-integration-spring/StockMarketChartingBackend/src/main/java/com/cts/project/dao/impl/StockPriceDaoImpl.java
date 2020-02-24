package com.cts.project.dao.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cts.project.bean.Company;
import com.cts.project.bean.StockPrice;
import com.cts.project.dao.StockPriceDao;

@CrossOrigin(origins="*")
@RestController
public class StockPriceDaoImpl {

	@Autowired
	StockPriceDao spDao;
	
	@GetMapping("/stockPrice")
	public List<StockPrice> getAllStockPrice()
	{
		return spDao.findAll();
	}
	
	@GetMapping("/stockPrice/{id}")
	public StockPrice getstockPriceById(@PathVariable int id)
	{
		Optional<StockPrice> spList=spDao.findById(id);
		StockPrice sp=spList.get();
		return sp;
	}
	
	@PostMapping("/stockPrice")
	public StockPrice saveStockPrice(@RequestBody StockPrice sp)
	{
		StockPrice newStockPrice=spDao.save(sp);
		return newStockPrice;
	}
	
	@DeleteMapping("/stockPrice/{id}")
	public void deleteStockPrice(@PathVariable int id)
	{
		spDao.deleteById(id);
	}
	

	@PutMapping("/stockPrice")
	public StockPrice updateCompany(@RequestBody StockPrice sp)
	{
		StockPrice updateSp=spDao.save(sp);
		return updateSp;
	}

	
}

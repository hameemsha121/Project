package com.cts.training.exchangeservice;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;





@CrossOrigin(origins="*")
@RestController
public class StockExchangeDAOImpl {
	
	@Autowired
	StockExchangeDAO exchangeDAO;
	
	@Autowired
	ExchangeService exchangeService;
	
//	@GetMapping("/exchange")
//	public List<StockExchange> getAllStockExchange()
//	{
//		return exchangeService.getAllStockExchange();
//	}
	Logger logger=LoggerFactory.getLogger(this.getClass());
	
	@GetMapping("/exchange")
	public ResponseEntity<?>getallexchanges() {
		List<StockExchange> list = exchangeService.getAllStockExchange();
		if(list.size()>0)
		{
			return new ResponseEntity<List<StockExchange>>(list , HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<String>("No exchanges found",HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/exchange/{id}")
	public ResponseEntity<?> getElementById(@PathVariable("id") int id) {
		try {
			StockExchange exchange=exchangeService.getExchangeById(id);
			return new ResponseEntity<StockExchange>(exchange,HttpStatus.OK);
		}catch(NoClassDefFoundError e){
			return new ResponseEntity<String>("No such exchange found",HttpStatus.NOT_FOUND);
		}
	}
	
//	@PostMapping("/exchange")
//	public StockExchange saveStockExchange(@RequestBody StockExchange exchange)
//	{
//		StockExchange newExchange=exchangeService.saveStockExchange(exchange);
//		return newExchange;
//	}
//	
	@PostMapping("/exchange")
	public ResponseEntity<StockExchange> save(@RequestBody StockExchange exchange)
	{
		exchangeService.saveStockExchange(exchange);
		return new ResponseEntity<StockExchange>(exchange,HttpStatus.OK); 
	}
	
//	@GetMapping("/exchange/{id}")
//	public StockExchange getExchangeById(@PathVariable int id)
//	{
//		StockExchange exchangeList=exchangeService.getExchangeById(id);
//		return exchangeList;
//	}
	
	@DeleteMapping("/exchange/{id}")
	public ResponseEntity<StockExchange> delete(@PathVariable int id)
	{
		exchangeService.deleteStockExchange(id);;
		return new ResponseEntity<StockExchange>(HttpStatus.OK);
	}
	

	@PutMapping("/exchange")
	public ResponseEntity<StockExchange> update(@RequestBody StockExchange exchange)
	{
		exchangeService.saveStockExchange(exchange);
		return new ResponseEntity<StockExchange>(exchange,HttpStatus.OK); 
	}
	
	
//	@PutMapping("/exchange")
//	public StockExchange updateExchange(@RequestBody StockExchange exchange)
//	{
//		StockExchange updateExchange=exchangeService.saveStockExchange(exchange);
//		return updateExchange;
//	}
}

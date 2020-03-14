package com.cts.training.stockpriceservices;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;



@CrossOrigin(origins="*")
@RestController
public class StockPriceDaoImpl {

	@Autowired
	StockPriceDao spDao;
	
	@Autowired
	StockPriceService stockPriceService;
	
	Logger logger=LoggerFactory.getLogger(this.getClass());
//	@GetMapping("/stockprice")
//	public List<StockPrice> getAllStockPrice()
//	{
//		return stockPriceService.getAllStockPrice();
//	}
//	
//	@GetMapping("/stockprice/{id}")
//	public StockPrice getstockPriceById(@PathVariable int id)
//	{
//		StockPrice spList=stockPriceService.getstockPriceById(id);
//		
//		return spList;
//	}
	@GetMapping(value = "/stockprice/companyStockPriceBetween/{companyCode}/{stockExchange}/{startDate}/{endDate}", 
			produces = "application/json")
	public ResponseEntity<?> getCompanyStockPricePerDayBetween(@PathVariable String companyCode,
			@PathVariable String stockExchange, @PathVariable String startDate, @PathVariable String endDate) {

		return new ResponseEntity<List<StockPriceOnPeriod>>(stockPriceService.getCompanyStockPriceBetween(companyCode,
				stockExchange, LocalDate.parse(startDate), LocalDate.parse(endDate)), HttpStatus.OK);
	}
	
	
	
	
	
	
	
	@PostMapping(value="stockprice/uploadStocksSheet",consumes= MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> uploadStockSheet(@RequestParam("stocksSheet") MultipartFile file)
	{
		logger.info("File received:{}",file.getOriginalFilename());
		if(file.getOriginalFilename().endsWith(".xls")||file.getOriginalFilename().endsWith(".xlsx")) {
			try {
				return new ResponseEntity<ImportSummary>(stockPriceService.addStockPricesFromExcelSheet(file),HttpStatus.OK);
			}catch(IOException e) {
				e.printStackTrace();
				return new ResponseEntity<String>("Error reading file",HttpStatus.BAD_REQUEST);
				
			}catch(Exception e) {
				e.printStackTrace();
				return new ResponseEntity<String>(e.getMessage(),HttpStatus.BAD_REQUEST);
			}
			
		}else {
		
		return new ResponseEntity<String>("Wrong file extension",HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/stockprice")
	public ResponseEntity<?>getallexchanges() {
		List<StockPrice> list = stockPriceService.getAllStockPrice();
		if(list.size()>0)
		{
			return new ResponseEntity<List<StockPrice>>(list , HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<String>("Not found",HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/stockprice/{id}")
	public ResponseEntity<?> getElementById(@PathVariable("id") int id) {
		try {
			StockPrice stockprice=stockPriceService.getstockPriceById(id);
			return new ResponseEntity<StockPrice>(stockprice,HttpStatus.OK);
		}catch(NoClassDefFoundError e){
			return new ResponseEntity<String>("Not found",HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/stockprice")
	public ResponseEntity<StockPrice>saveStockPrice(@RequestBody StockPrice sp)
	{
		stockPriceService.saveStockPrice(sp);
		return new ResponseEntity<StockPrice>(sp,HttpStatus.OK);
	}
	
	@DeleteMapping("/stockprice/{id}")
	public ResponseEntity<StockPrice> deleteStockPrice(@PathVariable int id)
	{
		stockPriceService.deleteStockPrice(id);
		return new ResponseEntity<StockPrice>(HttpStatus.OK);
	}
	
	
	@PutMapping("/stockprice/{id}")
	public ResponseEntity<StockPrice> updateCompany(@RequestBody StockPrice sp)
	{
		stockPriceService.saveStockPrice(sp);
		return new ResponseEntity<StockPrice>(sp,HttpStatus.OK);
	}

	
}

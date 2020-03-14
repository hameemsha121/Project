package com.cts.training.stockpriceservices;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;


public interface StockPriceService {


	
	public List<StockPrice> getAllStockPrice();
	public StockPrice getstockPriceById(int id);
	public StockPrice saveStockPrice(StockPrice sp);
	public void deleteStockPrice(int id);
	public StockPrice updateCompany(StockPrice sp);
	public ImportSummary addStockPricesFromExcelSheet(MultipartFile file) throws Exception;
	List<StockPriceOnPeriod> getCompanyStockPriceBetween(String companyCode, String stockExchange, LocalDate startDate,
			LocalDate endDate);


	
}

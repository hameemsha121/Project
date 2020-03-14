package com.cts.training.stockpriceservices;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="StockPrice")
public class StockPrice implements Serializable {

	@Id
	@GeneratedValue
	private Integer id;
	private String companyCode;
	private String stockExchange;
	private Integer currentPrice;
	private LocalDate date;
	private LocalTime time;
	
	public StockPrice() {
		
	}

	



	public StockPrice(String companyCode, String stockExchange, Integer currentPrice, LocalDate date, LocalTime time) {
		super();
		this.companyCode = companyCode;
		this.stockExchange = stockExchange;
		this.currentPrice = currentPrice;
		this.date = date;
		this.time = time;
	}





	public Integer getId() {
		return id;
	}



	public void setId(Integer id) {
		this.id = id;
	}



	public String getCompanyCode() {
		return companyCode;
	}



	public void setCompanyCode(String companyCode) {
		this.companyCode = companyCode;
	}



	public String getStockExchange() {
		return stockExchange;
	}



	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}



	public Integer getCurrentPrice() {
		return currentPrice;
	}



	public void setCurrentPrice(Integer currentPrice) {
		this.currentPrice = currentPrice;
	}



	public LocalDate getDate() {
		return date;
	}



	public void setDate(LocalDate date) {
		this.date = date;
	}



	public LocalTime getTime() {
		return time;
	}



	public void setTime(LocalTime time) {
		this.time = time;
	}



	@Override
	public String toString() {
		return "StockPrice [id=" + id + ", companyCode=" + companyCode + ", stockExchange=" + stockExchange
				+ ", currentPrice=" + currentPrice + ", date=" + date + ", time=" + time + "]";
	}


	
	
}

package com.cts.training.stockpriceservices;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

public class ImportSummary {
	private int numberOfRecordsInserted;
	private LocalDate startDate;
	private LocalDate enddate;
	private Set<String> companyCodes;
	private Set<String> stockExchanges;
	private List<String> duplicates;
	
	public ImportSummary(){
		
	}

	public ImportSummary(int numberOfRecordsInserted, LocalDate startDate, LocalDate enddate, Set<String> companyCodes,
			Set<String> stockExchanges, List<String> duplicates) {
		super();
		this.numberOfRecordsInserted = numberOfRecordsInserted;
		this.startDate = startDate;
		this.enddate = enddate;
		this.companyCodes = companyCodes;
		this.stockExchanges = stockExchanges;
		this.duplicates = duplicates;
	}

	public int getNumberOfRecordsInserted() {
		return numberOfRecordsInserted;
	}

	public void setNumberOfRecordsInserted(int numberOfRecordsInserted) {
		this.numberOfRecordsInserted = numberOfRecordsInserted;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEnddate() {
		return enddate;
	}

	public void setEnddate(LocalDate enddate) {
		this.enddate = enddate;
	}

	public Set<String> getCompanyCodes() {
		return companyCodes;
	}

	public void setCompanyCodes(Set<String> companyCodes) {
		this.companyCodes = companyCodes;
	}

	public Set<String> getStockExchanges() {
		return stockExchanges;
	}

	public void setStockExchanges(Set<String> stockExchanges) {
		this.stockExchanges = stockExchanges;
	}

	public List<String> getDuplicates() {
		return duplicates;
	}

	public void setDuplicates(List<String> duplicates) {
		this.duplicates = duplicates;
	}

	@Override
	public String toString() {
		return "ImportSummary [numberOfRecordsInserted=" + numberOfRecordsInserted + ", startDate=" + startDate
				+ ", enddate=" + enddate + ", companyCodes=" + companyCodes + ", stockExchanges=" + stockExchanges
				+ ", duplicates=" + duplicates + "]";
	}
	

}

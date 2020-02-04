package com.cts.training.controller;

import java.util.ArrayList;
import java.util.List;

import com.cts.training.dao.CompanyDAO;
import com.cts.training.daoimpl.CompanyDAOImpl;
import com.cts.training.model.Company;

public class CompanyController {

	public static void main(String[] args) {
		List<String> directors = new ArrayList<String>();
		directors.add("Hameemsha");
		directors.add("Nadheeha Salam");

		List<String> stockExchanges = new ArrayList<String>();
		stockExchanges.add("BSE");
		stockExchanges.add("NSE");

		List<String> stockCodes = new ArrayList<String>();
		stockCodes.add("123");
		stockCodes.add("234");

		Company company = new Company(101, "jhdss", "dbmzxc", directors, stockExchanges, "Technology",
				"This is a company.", stockCodes,67890L);
		
		CompanyDAO companyDAO = new CompanyDAOImpl();
		companyDAO.addCompany(company);
	}
}

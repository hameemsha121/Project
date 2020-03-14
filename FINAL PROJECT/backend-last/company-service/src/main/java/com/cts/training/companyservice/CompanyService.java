package com.cts.training.companyservice;

import java.util.List;

public interface CompanyService {

	public List<Company> getAllCompanies();
	public Company getCompanyId(int id);
	public Company insert(Company cd);
	public Company update(Company cd);
	public void delete(int id);
	
}

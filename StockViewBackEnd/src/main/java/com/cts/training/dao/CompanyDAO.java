package com.cts.training.dao;

import java.util.List;

import com.cts.training.model.CompanyEntity;

public interface CompanyDAO {

	public boolean addCompany(CompanyEntity company);

	public boolean updateCompany(CompanyEntity company);

	public boolean deleteCompany(CompanyEntity company);

	public CompanyEntity getCompanyById(int id);

	public List<CompanyEntity> getAllCompanys();
	
}

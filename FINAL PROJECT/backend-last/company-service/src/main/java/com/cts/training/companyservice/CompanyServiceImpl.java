package com.cts.training.companyservice;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;





@Service
public class CompanyServiceImpl implements CompanyService{

	@Autowired
	CompanyDAO companyDao;
	
	
	
	@Override
	public Company insert(Company comp) {
		Company company=new Company();
		BeanUtils.copyProperties(comp, company);
		companyDao.save(company);
		return comp;
	}

	@Override
	public Company update(Company comp) {
		Company company=new Company();
		BeanUtils.copyProperties(comp, company);
		BeanUtils.copyProperties(companyDao.save(company), comp);
		return comp;
	}

	@Override
	public void delete(int id) {
		companyDao.deleteById(id);
		
	}

	@Override
	public List<Company> getAllCompanies() {
		List<Company> entities = companyDao.findAll();
		List<Company> companyList = new ArrayList<Company>();
		for(Company entity: entities) {
			Company company = new Company();
			BeanUtils.copyProperties(entity, company);
			companyList.add(company);
		}
		System.out.println("Entity: "+entities);
		System.out.println("DTO: "+companyList);
		return companyList;
	}

	@Override
	public Company getCompanyId(int id) {
		Optional<Company> companies = companyDao.findById(id);
		Company company = new Company();
		BeanUtils.copyProperties(companies.orElse(new Company()), company);
		return company;
	}

}

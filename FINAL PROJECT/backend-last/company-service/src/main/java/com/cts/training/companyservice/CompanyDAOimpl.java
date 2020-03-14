package com.cts.training.companyservice;

import java.util.List;
import java.util.Optional;

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
public class CompanyDAOimpl {
	
	Logger logger=LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	CompanyDAO companyDao;
	
	@Autowired
	CompanyService companyService;
	
	@Autowired
	private UserServiceProxy proxy;
	
	@Autowired
	private InitialPublicOfferingProxy ipoProxy;
	
	
//	@GetMapping("/company")
//	public List<Company> getAllCompany()
//	{
//		return companyDao.findAll();
//	}
//	

	@GetMapping("/company")
	public ResponseEntity<?>getallcompanies() {
		List<Company> list = companyService.getAllCompanies();
		if(list.size()>0)
		{
			return new ResponseEntity<List<Company>>(list , HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<String>("No companies found",HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/company/{id}")
	public ResponseEntity<?> getElementById(@PathVariable("id") int id) {
		try {
			Company company=companyService.getCompanyId(id);
			return new ResponseEntity<Company>(company,HttpStatus.OK);
		}catch(NoClassDefFoundError e){
			return new ResponseEntity<String>("No such company found",HttpStatus.NOT_FOUND);
		}
	}
	
	
	
	
	
//	@GetMapping("/company/{id}")
//	public Company getCompanyById(@PathVariable int id)
//	{
//		Optional<Company> companyList=companyDao.findById(id);
//		Company company=companyList.get();
//		return company;
//	}
	
	
	
	
	
//	@PostMapping("/company")
//	public Company saveCompany(@RequestBody Company company)
//	{
//		Company newCompany=companyDao.save(company);
//		return newCompany;
//	}
//	
//	@DeleteMapping("/company/{id}")
//	public void deleteCompany(@PathVariable int id)
//	{
//		companyDao.deleteById(id);
//	}
//	
//	@PutMapping("/company")
//	public Company updateCompany(@RequestBody Company company)
//	{
//		Company updateCompany=companyDao.save(company);
//		return updateCompany;
//	}

	@PostMapping("/company")
	public ResponseEntity<Company> save(@RequestBody Company company)
	{
		companyService.insert(company);
		return new ResponseEntity<Company>(company,HttpStatus.OK); 
	}
	
	@PutMapping("/company")
	public ResponseEntity<Company> update(@RequestBody Company company)
	{
		companyService.update(company);
		return  new ResponseEntity<Company>(HttpStatus.OK);
	}
	
	@DeleteMapping("/company/{id}")
	public ResponseEntity<Company> delete(@PathVariable int id)
	{
		companyService.delete(id);
		return new ResponseEntity<Company>(HttpStatus.OK);
	}
	
//	@GetMapping("/user-by-company")
//	public ResponseEntity<?>getallusersByCompany(){
//		return proxy.getallusers();
//	}
//	
	
	@GetMapping("/user-by-company")
	public ResponseEntity<?>getAllUsersByCompany(){
		logger.info("Get All users invoked.....");
		ResponseEntity<?> users=proxy.getallusers();
		logger.info("Information-->{}",users);
		return users;
	}
	
	
}

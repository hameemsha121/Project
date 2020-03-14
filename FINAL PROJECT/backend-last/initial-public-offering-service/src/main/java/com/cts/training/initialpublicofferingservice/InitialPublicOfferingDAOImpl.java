package com.cts.training.initialpublicofferingservice;

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
public class InitialPublicOfferingDAOImpl {
	
	@Autowired
	InitialPublicOfferingDAO ipoDAO;
	
	@Autowired
	IpoService ipoService;
	
//	@GetMapping("/ipo")
//	public List<InitialPublicOffering> getAllIpo()
//	{
//		return ipoService.getAllIpo();
//	}

	Logger logger=LoggerFactory.getLogger(this.getClass());
	
	@GetMapping("/ipo")
	public ResponseEntity<?>getallIpos() {
		List<InitialPublicOffering> list = ipoService.getAllIpo();
		if(list.size()>0)
		{
			return new ResponseEntity<List<InitialPublicOffering>>(list , HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<String>("No exchanges found",HttpStatus.NOT_FOUND);
		}
	}
	
	
//	@GetMapping("/ipo/{id}")
//	public InitialPublicOffering getIpoById(@PathVariable int id) throws NoSuchElementException
//	{
//		InitialPublicOffering ipoList=ipoService.getIpoById(id);
//		return ipoList;
//	}
//	
	
	@GetMapping("/ipo/{id}")
	public ResponseEntity<?> getElementById(@PathVariable("id") int id) {
		try {
			InitialPublicOffering ipo=ipoService.getIpoById(id);
			return new ResponseEntity<InitialPublicOffering>(ipo,HttpStatus.OK);
		}catch(NoClassDefFoundError e){
			return new ResponseEntity<String>("No such exchange found",HttpStatus.NOT_FOUND);
		}
	}
	
//	@PostMapping("/ipo")
//	public InitialPublicOffering saveIpo(@RequestBody InitialPublicOffering ipo)
//	{
//		InitialPublicOffering newIpo=ipoService.saveIpo(ipo);
//		return newIpo;
//	}
	
	@PostMapping("/ipo")
	public ResponseEntity<InitialPublicOffering> save(@RequestBody InitialPublicOffering ipo)
	{
		ipoService.saveIpo(ipo);
		return new ResponseEntity<InitialPublicOffering>(ipo,HttpStatus.OK); 
	}
	
	@DeleteMapping("/ipo/{id}")
	public ResponseEntity<InitialPublicOffering> deleteIpo(@PathVariable int id)
	{
		ipoService.deleteIpo(id);
		return new ResponseEntity<InitialPublicOffering>(HttpStatus.OK);
	}
	
	@PutMapping("/ipo/")
	public ResponseEntity<InitialPublicOffering> updateIpo(@RequestBody InitialPublicOffering ipo)
	{
		ipoService.saveIpo(ipo);
		return new ResponseEntity<InitialPublicOffering>(ipo,HttpStatus.OK);
	}
}

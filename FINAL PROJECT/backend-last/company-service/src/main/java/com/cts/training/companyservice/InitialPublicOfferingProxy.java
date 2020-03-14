package com.cts.training.companyservice;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name="initial-public-offering-service")
public interface InitialPublicOfferingProxy {

	@GetMapping("/ipo")
	public ResponseEntity<?>getallIpos();
	
}

package com.cts.training.companyservice;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;


@FeignClient(name="netflix-zuul-api-gateway-server")
//@FeignClient(name="user-service",url="http://localhost:8000")//accept only from one port as url is having only one port number
public interface UserServiceProxy {

	@GetMapping(value="/user-service/user")
	public ResponseEntity<?>getallusers();
	
}

package com.cts.training.stockpriceservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class StockPriceServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(StockPriceServicesApplication.class, args);
	}

}

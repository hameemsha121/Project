package com.cts.training.initialpublicofferingservice;

import java.util.List;



public interface IpoService {

	public List<InitialPublicOffering> getAllIpo();
	public InitialPublicOffering getIpoById( int id);
	public InitialPublicOffering saveIpo(InitialPublicOffering ipo);
	public void deleteIpo(int id);
	public InitialPublicOffering updateIpo(InitialPublicOffering ipo);


	
}	

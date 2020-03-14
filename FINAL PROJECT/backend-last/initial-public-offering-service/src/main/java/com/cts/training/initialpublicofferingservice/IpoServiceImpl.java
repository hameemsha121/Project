package com.cts.training.initialpublicofferingservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class IpoServiceImpl implements IpoService{
	
	@Autowired
	InitialPublicOfferingDAO ipoDAO;
	
	@Override
	public List<InitialPublicOffering> getAllIpo()
	{
		return ipoDAO.findAll();
	}
	@Override
	public InitialPublicOffering getIpoById(int id)
	{
		Optional<InitialPublicOffering> ipoList=ipoDAO.findById(id);
		InitialPublicOffering ipo=ipoList.get();
		return ipo;
	}
	@Override
	public InitialPublicOffering saveIpo(InitialPublicOffering ipo)
	{
		InitialPublicOffering newIpo=ipoDAO.save(ipo);
		return newIpo;
	}
	@Override
	public void deleteIpo(int id)
	{
		ipoDAO.deleteById(id);
	}
	@Override
	public InitialPublicOffering updateIpo(InitialPublicOffering ipo)
	{
		InitialPublicOffering updateIpo=ipoDAO.save(ipo);
		return updateIpo;
	}


}

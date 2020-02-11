package com.cts.training.test;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.dao.DataIntegrityViolationException;

import com.cts.training.dao.CompanyDAO;
import com.cts.training.daoimpl.CompanyDAOImpl;
import com.cts.training.model.CompanyEntity;

public class CompanyEntityTest {

	private static AnnotationConfigApplicationContext context;
	private static CompanyDAO companyDAO;
	private static CompanyEntity company;
	private static List<String> directors;
	private static List<String> stockExchanges;
	private static List<String> stockCodes;

	@BeforeClass
	public static void init() {
		context = new AnnotationConfigApplicationContext();
		context.scan("com.cts.training");
		context.refresh();
		company = (CompanyEntity) context.getBean("companyEntity");
		companyDAO = (CompanyDAO) context.getBean("companyDAO");
		bod = new ArrayList<String>();
		bod.add("Dir 1");
		bod.add("Dir 2");
		bod.add("Dir 3");
		sE = new ArrayList<String>();
		sE.add("BSE");
		sE.add("NASDAQ");
		sE.add("NSE");
		sC = new ArrayList<String>();
		sC.add("bnm");
		sC.add("vbn");
		sC.add("567");
	}

	@Test
	public void testGetAllCompanys() {
		List<CompanyEntity> companys = companyDAO.getAllCompanys();
		assertEquals(1, companys.size());
	}

	@Test
	public void testGetCompanyByIdSuccess() {
		CompanyEntity c = new CompanyEntity(1, "bnm", "vbn", bod, sE, "cvbnm",
				"nmj", sC, 33123L);
		assertEquals(c.getSector(), companyDAO.getCompanyById(101).getSector());
	}

	@Test
	public void testGetCompanyByIdFail() {
		assertEquals(null, companyDAO.getCompanyById(50));
	}

	@Test
	public void testUpdateCompanySuccess() {
		CompanyEntity c = companyDAO.getCompanyById(101);
		c.setCeoName("ceo");
		assertEquals(true, companyDAO.updateCompany(c));
	}

	@Test(expected = NullPointerException.class)
	public void testUpdateCompanyFail() {
		CompanyEntity c = companyDAO.getCompanyById(90);
		c.setCeoName("bnm");
		assertEquals(true, companyDAO.updateCompany(c));
	}

	@Test
//	@Ignore
	public void testAddCompanySuccess() {
		CompanyEntity c = new CompanyEntity(1, "bnm", "vbn", bod, sE, "cvbnm",
				"nmj", sC, 33123L);
	assertEquals(true, companyDAO.addCompany(c));
	}

	@Test(expected = DataIntegrityViolationException.class)
	@Ignore
	public void testAddCompanyFail() {
		CompanyEntity c = new CompanyEntity(1, "bnm", "vbn", bod, sE, "cvbnm",
				"nmj", sC, 33123L);
		assertEquals(true, companyDAO.addCompany(c));
	}

	@Test
	@Ignore
	public void testDeleteCompanySuccess() {
		CompanyEntity c = companyDAO.getCompanyById(101);
		assertEquals(true, companyDAO.deleteCompany(c));
	}

	@Test(expected = IllegalArgumentException.class)
	@Ignore
	public void testDeleteCompanyFail() {
		CompanyEntity c = companyDAO.getCompanyById(23);
		assertEquals(true, companyDAO.deleteCompany(c));
	}
}

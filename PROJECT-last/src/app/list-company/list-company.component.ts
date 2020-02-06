import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { CompanyService } from '../service/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {
  companies:Company[];
  constructor(private companyService:CompanyService,private router:Router) { }

  ngOnInit() {
      this.companyService.getAllCompany().subscribe(data=>{
        this.companies=data;
      });
  }
  deleteCompany(company:Company)
  {
    this.companyService.deletecompany(company.id).subscribe();
    this.companies=this.companies.filter(c=>c!==company);
  }
  updateCompany(company:Company)
  {
    localStorage.removeItem('companyId');
    localStorage.setItem('companyId',company.id.toString());
    this.router.navigate(['/update-company'])
  }
}

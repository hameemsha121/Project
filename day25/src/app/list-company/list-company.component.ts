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
  company:Company[];
  constructor(private companyService:CompanyService,private router:Router) { }

  ngOnInit() {
    this.companyService.getAllCompanies().subscribe(u=>{
      this.company=u;
    });
  }

}

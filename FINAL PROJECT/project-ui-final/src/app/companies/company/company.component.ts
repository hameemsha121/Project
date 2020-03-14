import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';
import {Company} from '../../models/company';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private companyService: CompanyService,private router:Router) { }
  companies:Company[]
  users:User[]
  ngOnInit() {
    this.companyService.getAllCompany().subscribe(data => {
      this.companies =data;
    });
  }

deleteCompany(company:Company)
{
  this.companyService.deleteCompany(company.id).subscribe();
  this.companies=this.companies.filter(c=> c!== company);
} 
updateCompany(company:Company)
{
localStorage.removeItem('companyId');
localStorage.setItem('companyId',company.id.toString());
this.router.navigate(['company-update'])
}

getAllUsers(){
  this.companyService.getUserByCompany().subscribe(data=>{
    this.users=data;
  })
}

}
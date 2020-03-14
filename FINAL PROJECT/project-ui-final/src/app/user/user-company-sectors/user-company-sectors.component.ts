import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-user-company-sectors',
  templateUrl: './user-company-sectors.component.html',
  styleUrls: ['./user-company-sectors.component.css']
})
export class UserCompanySectorsComponent implements OnInit {
  compareCompany: FormGroup;
  company: Company[];
  constructor(private formBulder: FormBuilder, private companyService: CompanyService) { }
  ngOnInit() {
    this.compareCompany = this.formBulder.group({
      selectCompany1: [''],
      selectCompany2: ['']
    });

   
  }
  compareCompanies(){
    console.log(this.compareCompany.value);
    alert(this.compareCompany.value);
  }
}

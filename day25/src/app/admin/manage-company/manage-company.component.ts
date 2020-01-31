import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from "src/app/service/company.service";

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {

  registerCompany:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router,private companyService:CompanyService) { }

  ngOnInit() {
    this.registerCompany=this.formBuilder.group({
      companyname:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      turnover:['',Validators.required],
      CEO:['',Validators.required]
    });
  }

  addCompany(){
    this.companyService.saveCompany(this.registerCompany.value).subscribe(u=>{
      console.log('company registered successfully'+u);
    });
  }
}

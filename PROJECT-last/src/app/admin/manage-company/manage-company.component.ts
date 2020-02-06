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

  AddCompanyForm:FormGroup
  constructor(private formBuilder:FormBuilder,private router:Router,private companyService:CompanyService) { }

  ngOnInit() {
    this.AddCompanyForm = this.formBuilder.group({
      id :['',Validators.required],
      companyname:['',Validators.required],
      city:['',Validators.required],
      turnover:['',Validators.required],
      ceo :['',Validators.required]
    });
  }
    addCompany()
    {
      this.companyService.saveCompany(this.AddCompanyForm.value).subscribe(data=>{
        console.log("Company inserted Successfully");
        this.router.navigate(['/list-company']);
      })
    }

    onSubmit(){
      console.log(this.AddCompanyForm.value);
    }

  }


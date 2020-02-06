import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/service/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  updateCompany : FormGroup;
  constructor(private formBuilder:FormBuilder,private companyService:CompanyService,private router:Router) { }

  ngOnInit() {
    this.updateCompany=this.formBuilder.group({
      id:[],
      companyname:['',Validators.required],
      city:['',Validators.required],
      turnover:['',Validators.required],
      ceo:['',Validators.required]
    });
    const id=localStorage.getItem('companyId');
    if(+id>0){
      this.companyService.getCompanyById(+id).subscribe(company=>{
      this.updateCompany.patchValue(company);  
      });
    }
  }
    updateTheCompany()
    {
    this.companyService.updateCompanyInfo(this.updateCompany.value).subscribe(u => {
    this.router.navigate(['/list-company'])
    });
  }

  }



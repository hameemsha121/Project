import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Company } from 'src/app/models/company';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CompanyService } from 'src/app/service/company.service';
import { exchange } from 'src/app/models/exchange';
import { ExchangeService } from 'src/app/service/exchange.service';
import { stockPriceData } from 'src/app/models/stockPriceData';
import { StockPriceService } from 'src/app/service/stock-price.service';

@Component({
  selector: 'app-user-compare-companies',
  templateUrl: './user-compare-companies.component.html',
  styleUrls: ['./user-compare-companies.component.css']
})
export class UserCompareCompaniesComponent implements OnInit {
 
compare:FormGroup;
constructor(private service:CompanyService, private formBuilder:FormBuilder, private router:Router) { }
company : Company[];
options: string[];
i:number;
myControl = new FormControl();
filteredOptions: Observable<string[]>;
compareCompany(){
  localStorage.removeItem("c1");
  localStorage.removeItem("c2");
  localStorage.setItem("c1",this.compare.value['comp']);
  localStorage.setItem("c2",this.compare.value['compa']);
  this.router.navigate(['/highcharts']);
  
}
ngOnInit() {
  this.service.getAllCompany().subscribe(data =>{
    this.company=data;
  });
  this.compare = this.formBuilder.group({
    comp:[''],
    compa:['']
  });
  
    
  this.compare.valueChanges.subscribe(result=>console.log(result));
  
}




}

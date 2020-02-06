import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExchangeService } from 'src/app/service/exchange.service';

@Component({
  selector: 'app-manage-exchange',
  templateUrl: './manage-exchange.component.html',
  styleUrls: ['./manage-exchange.component.css']
})
export class ManageExchangeComponent implements OnInit {

  AddExchangeForm:FormGroup
  constructor(private formBuilder:FormBuilder,private router:Router,private exchangeService:ExchangeService) { }

  ngOnInit() {
    this.AddExchangeForm=this.formBuilder.group({
      id:['',Validators.required],
      exchangename:['',Validators.required],
      about:['',Validators.required],
      address:['',Validators.required]
    });
  }

    addExchange()
    {
      this.exchangeService.saveExchange(this.AddExchangeForm.value).subscribe(d=>{
        console.log("company inserted successfully");
        this.router.navigate(['/list-exchange']);
      })
    }
    onSubmit(){
      console.log(this.AddExchangeForm.value);
    }
}

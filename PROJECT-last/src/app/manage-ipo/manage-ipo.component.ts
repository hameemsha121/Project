import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IpoService } from '../service/ipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-ipo',
  templateUrl: './manage-ipo.component.html',
  styleUrls: ['./manage-ipo.component.css']
})
export class ManageIpoComponent implements OnInit {

  addIpoForm:FormGroup
  constructor(private formBuilder:FormBuilder,private ipoService:IpoService,private router:Router) { }

  ngOnInit() {
    this.addIpoForm=this.formBuilder.group({
      id:['',Validators.required],
      name:['',Validators.required],
      stockExchange:['',Validators.required],
      priceShare:['',Validators.required],
      noOfShare:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      pincode:['',Validators.required],
      date:['',Validators.required]
    });
  }
  
  addIpo(){
    this.ipoService.saveIpo(this.addIpoForm.value).subscribe(d=>{
      console.log("inserted successfully");
    })

  }
}

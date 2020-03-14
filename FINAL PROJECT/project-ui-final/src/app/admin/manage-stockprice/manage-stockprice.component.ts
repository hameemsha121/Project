import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-stockprice',
  templateUrl: './manage-stockprice.component.html',
  styleUrls: ['./manage-stockprice.component.css']
})
export class ManageStockpriceComponent implements OnInit {

  constructor(private router:Router) { }

  moveto(){
    this.router.navigate(['/list-stockPrice']);
  }
  movetoadd(){
    this.router.navigate(['/add-stockPrice']);
  }

  ngOnInit() {
  }

}

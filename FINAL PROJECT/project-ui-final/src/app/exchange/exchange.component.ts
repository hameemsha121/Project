import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  constructor(private router:Router) { }

  moveto(){
    this.router.navigate(['/list-exchange']);
  }
  movetoadd(){
    this.router.navigate(['/manageexchange']);
  }
  ngOnInit() {
  }

}

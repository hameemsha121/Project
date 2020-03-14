import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managecompanies',
  templateUrl: './managecompanies.component.html',
  styleUrls: ['./managecompanies.component.css']
})
export class ManagecompaniesComponent implements OnInit {

  constructor(private router:Router) { }

  moveto(){
    this.router.navigate(['/company']);
  }
  movetoadd(){
    this.router.navigate(['/add-company']);
  }

  ngOnInit() {
  }

}

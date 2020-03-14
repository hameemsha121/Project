import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-login',
  templateUrl: './common-login.component.html',
  styleUrls: ['./common-login.component.css']
})
export class CommonLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  adminlogin(){
    this.router.navigate(['/admin-login']);
  }
  login(){
    this.router.navigate(['/login']);
  }
}

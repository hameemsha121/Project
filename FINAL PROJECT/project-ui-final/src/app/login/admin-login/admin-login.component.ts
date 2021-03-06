import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginFormadmin: FormGroup;
  valid:boolean;
  constructor( private router:Router) { }

  ngOnInit() {
    this.loginFormadmin = new FormGroup({
      'username': new FormControl(''),
      'password': new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.loginFormadmin.value);
    if(this.loginFormadmin.value['username']==='admin'&& this.loginFormadmin.value['password']==='password')
    {
      this.router.navigate(['/admin-home'])
      
    }
    else
    {
      alert("invalid admin");
      this.router.navigate(['/admin-login']);
    }
      }

}

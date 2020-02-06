import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm:FormGroup
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
    

  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.router.navigate(['/loginpage']);
  }

}

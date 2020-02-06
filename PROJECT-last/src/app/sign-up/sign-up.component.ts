import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm:FormGroup;
  constructor(private router: Router) { }
  signUpFormInitialisation() {
    this.signupForm = new FormGroup({
      firstname: new FormControl(''),
      lastname:new FormControl(''),
      password: new FormControl('')
    })
  }
  

  ngOnInit() {

    this.signUpFormInitialisation();
  }

  signup() {
    alert('Sign up Succesfull.Please Login')
    this.router.navigate(['/login']);
  }
}

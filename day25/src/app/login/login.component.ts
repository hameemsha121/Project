import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    // getting logged in user from local storage
    let userIsLoggedIn = localStorage.getItem('user');
    console.log(userIsLoggedIn);

    userIsLoggedIn  = JSON.parse(userIsLoggedIn);

    console.log(userIsLoggedIn);
    
    if (userIsLoggedIn) {
      this.router.navigate(['/admin']);
    }

    this.loginFormInitialisation();
  }

  loginFormInitialisation() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  onSubmit() {
    console.log(this.loginForm.value);
    localStorage.setItem('user', JSON.stringify(this.loginForm.value));
    this.router.navigate(['/admin']);
  }
}

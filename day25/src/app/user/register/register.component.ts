import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TestServiceService } from 'src/app/service/test-service.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUser: FormGroup;
  constructor(private formBuilder: FormBuilder, private testService: TestServiceService, private router:Router) { }

  ngOnInit() {
    this.registerUser = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required,Validators.maxLength(10)]]
    });
  }

  addUser() {
    this.testService.saveUser(this.registerUser.value).subscribe(u => {
      console.log('user entered successfully' + u);
      this.router.navigate(['admin']);
    });
  }
  onSubmit(){
    console.log(this.registerUser.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestServiceService } from 'src/app/service/test-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateUser:FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: TestServiceService, private router: Router) { }


  ngOnInit() {
    this.updateUser=this.formBuilder.group({
      id:[],
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',Validators.required]
    });
    
    const id = localStorage.getItem('Id');
    //typecasting is done using + (to integer)
    if (+id > 0) {
      this.userService.getUserById(+id).subscribe(user => {
        this.updateUser.patchValue(user);
      });
  
  
  }
}
  updateTheUser (){
    this.userService.updateUserInfo(this.updateUser.value).subscribe(u=>{
      this.router.navigate(['users']);
    })
  }
}

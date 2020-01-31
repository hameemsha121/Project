import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../service/test-service.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[];


  constructor(private testService:TestServiceService,private router:Router) { 

  }

  ngOnInit() {
  this.testService.getAllUsers().subscribe(data =>{
    this.users=data;
  });
  }

  deleteUser(user:User){
    this.testService.deleteUser(user.id).subscribe();
    this.users=this.users.filter(u=>u!==user);
  }
  updateUser(user: User) {
    localStorage.removeItem('Id');
    localStorage.setItem('Id', user.id.toString());
    this.router.navigate(['update-user']);
  }
}

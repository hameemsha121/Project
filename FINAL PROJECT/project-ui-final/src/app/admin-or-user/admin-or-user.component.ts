import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admin-or-user',
  templateUrl: './admin-or-user.component.html',
  styleUrls: ['./admin-or-user.component.css']
})
export class AdminOrUserComponent implements OnInit {
  isAdmin:boolean;

  constructor(private userService:UserService) { 
  this.isAdmin=userService.isAdmin();
  }
  
  ngOnInit() {
    let username=sessionStorage.getItem('username');

  }

  
}

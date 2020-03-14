import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:User;
  constructor(private router: Router, private service:UserService) { }
   
   
    ngOnInit() {
      const c = sessionStorage.getItem('userId');
      this.service.getUserById(+c).subscribe(data =>{
        this.user=data;
      })
    }
}

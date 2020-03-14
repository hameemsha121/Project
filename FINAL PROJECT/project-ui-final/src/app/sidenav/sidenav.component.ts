import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private router:Router,private auth:AuthService) { }

  moveto(){
    this.router.navigate(['/admin-home']);
  }
  ngOnInit() {
  }

  logout(){
    this.auth.logout();
  }

}

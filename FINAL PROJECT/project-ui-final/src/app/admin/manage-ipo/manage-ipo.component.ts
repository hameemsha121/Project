import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-ipo',
  templateUrl: './manage-ipo.component.html',
  styleUrls: ['./manage-ipo.component.css']
})
export class ManageIpoComponent implements OnInit {

  constructor(private router:Router) { }

  moveto(){
    this.router.navigate(['/list-ipo']);
  }
  movetoadd(){
    this.router.navigate(['/add-ipo']);
  }
  ngOnInit() {
  }

}

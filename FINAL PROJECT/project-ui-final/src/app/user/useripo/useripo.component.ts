import { Component, OnInit } from '@angular/core';
import { Ipo } from 'src/app/models/ipo';
import { IpoService } from 'src/app/service/ipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-useripo',
  templateUrl: './useripo.component.html',
  styleUrls: ['./useripo.component.css']
})
export class UseripoComponent implements OnInit {

  ipos:Ipo[]
  constructor(private ipoService:IpoService,private router:Router) { }

  ngOnInit() {
    this.ipoService.getAllIpo().subscribe(d=>{
    this.ipos=d;
    });
  }

}

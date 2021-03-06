import { Component, OnInit } from '@angular/core';
import { StockPrice } from 'src/app/models/stockprice';
import { StockPriceService } from 'src/app/service/stock-price.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-stock-price',
  templateUrl: './list-stock-price.component.html',
  styleUrls: ['./list-stock-price.component.css']
})
export class ListStockPriceComponent implements OnInit {

  stockPrices:StockPrice[]
  constructor(private stockService:StockPriceService,private router:Router) { }

  ngOnInit() {
    this.stockService.getAllStockPrice().subscribe(d=>{
    this.stockPrices=d;
    });
  }
  deleteIpo(stockPrice:StockPrice)
  {
    this.stockService.deleteStockPrice(stockPrice.id).subscribe();
    this.stockPrices=this.stockPrices.filter(c=>c!==stockPrice);
  }
  updateIpo(stockPrice:StockPrice)
  {
    localStorage.removeItem('spId');
    localStorage.setItem('spId',stockPrice.id.toString());
    this.router.navigate(['/update-stockPrice'])
  }

}


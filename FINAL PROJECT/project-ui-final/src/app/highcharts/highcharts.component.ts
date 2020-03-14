import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { StockPriceService } from '../service/stock-price.service';
import { ActivatedRoute } from '@angular/router';
import { CompareDataForm } from '../models/compareDataForm';
import { stockPriceData } from '../models/stockPriceData';
import { CompanyService } from '../service/company.service';
import { Company } from '../models/company';
import { StockPrice} from '../models/stockprice';

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css']
})
export class HighchartsComponent implements OnInit {

    
    c1:number;
    c2:number;
    e1:string;
    e2:string;
    company:Company[];
    stprice:StockPrice[];
    d1:number[]=[];
    d2:number[]=[];
    i:number;
    j:number;
    n:number;
    title = "app";
    chart;
    updateFlag = false;
    Highcharts = Highcharts;
    chartConstructor = "chart";
    chartCallback;
    chartOptions = {
      chart: {
        type: "column"
     },
      series: [
        {
          name: '',
          data: []
        },
        {
          name: '',
          data: []
        }
      ],
      exporting: {
        enabled: true
      },
      yAxis: {
        allowDecimals: false,
        title: {
          text: "StockPrice"
        }
      }
    };
    
    
   constructor(private companyService:CompanyService, private stockPriceService:StockPriceService, private route: ActivatedRoute) {
   
    }
     chartOne = Highcharts;
     chartOneOptions: any;
     
   ngOnInit() {
    this.chartCallback = chart => {
       this.chart = chart;
     };
     this.c1=+localStorage.getItem("c1");
     this.c2=+localStorage.getItem("c2");
     this.companyService.getAllCompany().subscribe(data =>{
        this.company=data;
        for(this.i=0;this.i<this.company.length;this.i++){
           if(data[this.i].id==this.c1){
              this.e1=data[this.i].name;
           }
           if(data[this.i].id==this.c2){
              this.e2=data[this.i].name;
           }
        }
     });
     this.stockPriceService.getAllStockPrice().subscribe(data =>{
        this.stprice=data;
        for(this.i=0;this.i<this.stprice.length;this.i++){
           if(data[this.i].companyCode==this.c1){
              this.d1.push(data[this.i].currentPrice);
           }
           if(data[this.i].companyCode==this.c2){
              this.d2.push(data[this.i].currentPrice);
           }
        }
        console.log(this.e1);
        console.log(this.d2);
     });
  
    
   }
   updateChart() {
    const self = this,
      chart = this.chart;
    chart.showLoading();
    setTimeout(() => {
      chart.hideLoading();
      self.chartOptions.series = [
        {
          name: this.e1,
          data: this.d1
        },
        {
          name:this.e2,
          data: this.d2
        }
      ];
      self.updateFlag = true;
    }, 2000);
  }
   
 
}

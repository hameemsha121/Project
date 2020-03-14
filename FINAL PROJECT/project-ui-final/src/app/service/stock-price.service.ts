import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockPrice } from '../models/stockprice';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {

  httpUrl = environment.host +'stock-price-services/stockprice/';
  constructor(private httpclient: HttpClient, private stockPriceService: StockPriceService) { }
  getAllStockPrice(): Observable<StockPrice[]> {
    return this.httpclient.get<StockPrice[]>(this.httpUrl);
  }
  saveStockPrice(stockPrice: StockPrice): Observable<StockPrice> {
    return this.httpclient.post<StockPrice>(this.httpUrl, stockPrice);
  }
  deleteStockPrice(id: number): Observable<StockPrice> {
    return this.httpclient.delete<StockPrice>(this.httpUrl + id);
  }
  updateStockPriceInfo(stockPrice: StockPrice): Observable<StockPrice> {
    return this.httpclient.put<StockPrice>(this.httpUrl+stockPrice.id, stockPrice);
  }
  getStockPriceById(id: number): Observable<StockPrice> {
    return this.httpclient.get<StockPrice>(this.httpUrl + id);
  }
  getCompanyStockPricesBetween(companyCode: string, stockExchange: string, startDate: Date, endDate: Date): Observable<any[]> {
    let url = "companyStockPriceBetween/"+companyCode+"/"+stockExchange+"/"+startDate+"/"+endDate;
    return this.httpclient.get<any[]>(this.httpUrl+url);
  }
}

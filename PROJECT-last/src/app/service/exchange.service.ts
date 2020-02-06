import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { exchange } from '../models/exchange';


@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  httpUrl = 'http://localhost:3002/exchange/';

  
  constructor(private httpClient: HttpClient, private exchangeService: ExchangeService) { }
  
  getAllExchange(): Observable<exchange[]> {
    return this.httpClient.get<exchange[]>(this.httpUrl);
  }
  saveExchange(exchange: exchange): Observable<exchange> {
    return this.httpClient.post<exchange>(this.httpUrl, exchange);
  }
  deleteExchange(id: number): Observable<exchange> {
    return this.httpClient.delete<exchange>(this.httpUrl + id);
  }
  updateExchangeInfo(exchange: exchange): Observable<exchange> {
    return this.httpClient.put<exchange>(this.httpUrl + exchange.id, exchange);
  }
  getExchangeById(id: number): Observable<exchange> {
    return this.httpClient.get<exchange>(this.httpUrl + id);
  }

}





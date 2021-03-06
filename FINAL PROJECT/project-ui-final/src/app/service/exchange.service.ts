import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { exchange } from '../models/exchange';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  httpUrl =environment.host +"exchange-service/exchange";

  
  constructor(private httpClient: HttpClient, private exchangeService: ExchangeService) { }
  
  getAllExchange(): Observable<exchange[]> {
    return this.httpClient.get<exchange[]>(this.httpUrl);
  }
  saveExchange(exchanges: exchange): Observable<exchange> {
    return this.httpClient.post<exchange>(this.httpUrl, exchanges);
  }
  deleteExchange(id: number): Observable<exchange> {
    return this.httpClient.delete<exchange>(this.httpUrl + id);
  }
  updateExchangeInfo(exchanges: exchange): Observable<exchange> {
    return this.httpClient.put<exchange>(this.httpUrl, exchanges);
  }
  getExchangeById(id: number): Observable<exchange> {
    return this.httpClient.get<exchange>(this.httpUrl + id);
  }

}

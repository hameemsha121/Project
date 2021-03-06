import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipo } from '../models/ipo';

@Injectable({
  providedIn: 'root'
})
export class IpoService {

  httpUrl = 'http://localhost:3003/ipo/';
  constructor(private httpClient:HttpClient) { }
  getAllIpo(): Observable<Ipo[]> {
    return this.httpClient.get<Ipo[]>(this.httpUrl);
  }
  saveIpo(ipo: Ipo): Observable<Ipo> {
    return this.httpClient.post<Ipo>(this.httpUrl, ipo);
  }
  deleteIpo(id: number): Observable<Ipo> {
    return this.httpClient.delete<Ipo>(this.httpUrl + id);
  }
  updateIpoInfo(ipo: Ipo): Observable<Ipo> {
    return this.httpClient.put<Ipo>(this.httpUrl + ipo.id, ipo);
  }
  getIpoById(id: number): Observable<Ipo> {
    return this.httpClient.get<Ipo>(this.httpUrl + id);
  }


}

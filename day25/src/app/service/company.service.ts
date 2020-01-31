import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Company } from "../models/company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService{

  
  httpUrl='http://localhost:3001/companies';
  
  constructor(private httpClient: HttpClient) { }

  getAllCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.httpUrl);
  }
  saveCompany(company: Company): Observable<Company> {
    return this.httpClient.post<Company>(this.httpUrl, company);
  }
  // deleteCompany(id: number): Observable<User> {
  //   return this.httpClient.delete<User>(this.httpUrl + id);
  // }
  // updateCompanyInfo(user: User): Observable<User> {
  //   return this.httpClient.put<User>(this.httpUrl + user.id, user);
  // }
  // getCompanybyName(id: number): Observable<User> {
  //   return this.httpClient.get<User>(this.httpUrl + id);
  // }
  
}
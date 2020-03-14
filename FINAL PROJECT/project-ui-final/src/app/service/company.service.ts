import { Injectable } from '@angular/core';
import {Company} from '../models/company';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  httpUrl=environment.host +"company-service/company/"
  httpUrl2='http://localhost:8001/user-by-company/';

  constructor(private httpclient:HttpClient,private companyservice:CompanyService) { }
  getAllCompany() : Observable<Company[]>
{
  return this.httpclient.get<Company[]>(this.httpUrl);
}
saveCompany(company:Company) : Observable<Company>
{
  return this.httpclient.post<Company>(this.httpUrl, company);
}
deleteCompany(id:number) : Observable<Company>
{
 return  this.httpclient.delete<Company>(this.httpUrl + id);
}
updateCompanyInfo(company:Company) : Observable<Company>
{
  return this.httpclient.put<Company>(this.httpUrl,company);
}
getCompanyById(id:number) : Observable<Company>
{
  return this.httpclient.get<Company>(this.httpUrl + id);
}
getUserByCompany():Observable<User[]>
{
  return this.httpclient.get<User[]>(this.httpUrl2);
}
}

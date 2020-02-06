import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminComponent } from './admin/admin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './user/register/register.component';
import { UsersComponent } from './users/users.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { HttpClientModule } from '@angular/common/http';
import { TestServiceService } from './service/test-service.service';
import { ImportdataComponent } from './admin/importdata/importdata.component';
import { ManageCompanyComponent } from './admin/manage-company/manage-company.component';
import { ListCompanyComponent } from './list-company/list-company.component';
import { ManageExchangeComponent } from './admin/manage-exchange/manage-exchange.component';

import { NewExchangeComponent } from './admin/new-exchange/new-exchange.component';
import { NewIpoComponent } from './admin/new-ipo/new-ipo.component';
import { UpdateCompanyComponent } from './admin/update-company/update-company.component';
import { UpdateExchangeComponent } from './admin/update-exchange/update-exchange.component';
import { ViewUsersComponent } from './admin/view-users/view-users.component';
import { HomeComponent } from './home/home.component';
import { ListExchangeComponent } from './list-exchange/list-exchange.component';
import { ManageIpoComponent } from './manage-ipo/manage-ipo.component';
import { ListIpoComponent } from './list-ipo/list-ipo.component';
import { UpdateIpoComponent } from './update-ipo/update-ipo.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CompareChartsComponent } from './compare-charts/compare-charts.component';
import { CompareSectorComponent } from './compare-sector/compare-sector.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    AdminComponent,
    AboutusComponent,
    RegisterComponent,
    UsersComponent,
    UpdateUserComponent,
    ImportdataComponent,
    ManageCompanyComponent,
    ListCompanyComponent,
    ManageExchangeComponent,
    
    NewExchangeComponent,
    NewIpoComponent,
    UpdateCompanyComponent,
    UpdateExchangeComponent,
    ViewUsersComponent,
    HomeComponent,
    ListExchangeComponent,
    ManageIpoComponent,
    ListIpoComponent,
    UpdateIpoComponent,
    UserLoginComponent,
    LoginpageComponent,
    CompareChartsComponent,
    CompareSectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

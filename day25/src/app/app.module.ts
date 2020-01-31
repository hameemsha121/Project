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
    ListCompanyComponent
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

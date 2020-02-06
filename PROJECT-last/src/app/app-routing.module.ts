import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './user/register/register.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { ImportdataComponent } from './admin/importdata/importdata.component';
import { ManageCompanyComponent } from './admin/manage-company/manage-company.component';
import { ListCompanyComponent } from './list-company/list-company.component';
import { UpdateCompanyComponent } from './admin/update-company/update-company.component';
import { ManageExchangeComponent } from './admin/manage-exchange/manage-exchange.component';
import { ListExchangeComponent } from './list-exchange/list-exchange.component';
import { UpdateExchangeComponent } from './admin/update-exchange/update-exchange.component';
import { ManageIpoComponent } from './manage-ipo/manage-ipo.component';
import { ListIpoComponent } from './list-ipo/list-ipo.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CompareChartsComponent } from './compare-charts/compare-charts.component';
import { CompareSectorComponent } from './compare-sector/compare-sector.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'users', component: UsersComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'update-user', component: UpdateUserComponent },
  { path: 'import-data', component: ImportdataComponent },
  { path: 'manage-company', component: ManageCompanyComponent },
  { path: 'list-company', component: ListCompanyComponent },
  { path: 'update-company', component: UpdateCompanyComponent },
  { path: 'manage-exchange', component: ManageExchangeComponent },
  { path: 'list-exchange', component: ListExchangeComponent },
  { path: 'update-exchange', component: UpdateExchangeComponent },
  { path: 'manage-ipo', component: ManageIpoComponent },
  { path: 'list-ipo', component: ListIpoComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'compare-charts', component:CompareChartsComponent},
  { path: 'compare-sector', component:CompareSectorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

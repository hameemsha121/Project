import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UsersComponent } from './user/users/users.component';
import { UpdateUserComponent } from './user/user-update/user-update.component';
import { AddCompanyComponent } from './companies/add-company/add-company.component';
import { CompanyComponent } from './companies/company/company.component';
import { CompanyUpdateComponent } from './companies/company-update/company-update.component';
import { ImportDataComponent } from './admin/import-data/import-data.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CommonLoginComponent } from './login/common-login/common-login.component';
import { ManageexchangeComponent } from './admin/manageexchange/manageexchange.component';
import { AddIpoComponent } from './admin/add-ipo/add-ipo.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserCompareCompaniesComponent } from './user/user-compare-companies/user-compare-companies.component';
import { UserCompanySectorsComponent } from './user/user-company-sectors/user-company-sectors.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { ListIpoComponent } from './list-ipo/list-ipo.component';
import { UpdateIpoComponent } from './update-ipo/update-ipo.component';
import { ListExchangeComponent } from './list-exchange/list-exchange.component';
import { UpdateExchangeComponent } from './update-exchange/update-exchange.component';
import { ListStockPriceComponent } from './stockPrice/list-stock-price/list-stock-price.component';
import { UpdateStockPriceComponent } from './stockPrice/update-stock-price/update-stock-price.component';
import { AddStockPriceComponent } from './stockPrice/add-stock-price/add-stock-price.component';
import { ActivateComponent } from './activate/activate.component';
import { ManagecompaniesComponent } from './admin/managecompanies/managecompanies.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { ManageIpoComponent } from './admin/manage-ipo/manage-ipo.component';
import { ManageUserComponent } from './admin/manage-user/manage-user.component';
import { ManageStockpriceComponent } from './admin/manage-stockprice/manage-stockprice.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { AdminOrUserComponent } from './admin-or-user/admin-or-user.component';
import { UseripoComponent } from './user/useripo/useripo.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user-update', component: UpdateUserComponent },
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'company-update', component: CompanyUpdateComponent },
  { path: 'import-data', component: ImportDataComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: '', component: LoginComponent },
  { path: 'manageexchange', component: ManageexchangeComponent },
  { path: 'add-ipo', component: AddIpoComponent },
  { path: 'user-home', component: UserHomeComponent },
  { path: 'user-compare-companies', component: UserCompareCompaniesComponent },
  { path: 'user-compare-sectors', component: UserCompanySectorsComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'list-ipo', component: ListIpoComponent },
  { path: 'update-ipo', component: UpdateIpoComponent },
  { path: 'list-exchange', component: ListExchangeComponent },
  { path: 'update-exchange', component: UpdateExchangeComponent },
  { path: 'list-stockPrice', component: ListStockPriceComponent },
  { path: 'update-stockPrice', component: UpdateStockPriceComponent },
  { path: 'add-stockPrice', component: AddStockPriceComponent },
  { path: 'activate', component: ActivateComponent },
  { path: 'manage-company', component: ManagecompaniesComponent },
  { path: 'exchange', component: ExchangeComponent },
  { path: 'manage-ipo', component: ManageIpoComponent },
  { path: 'manage-user', component: ManageUserComponent },
  { path: 'manage-stock', component: ManageStockpriceComponent },
  { path: 'side-nav', component: SidenavComponent },
  { path: 'highcharts', component:HighchartsComponent},
  { path: 'contact',  component:ContactusComponent},
  {path:'admin-or-user',component:AdminOrUserComponent},
  { path: 'user-profile', component:UserProfileComponent},
  { path: 'useripo',component:UseripoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

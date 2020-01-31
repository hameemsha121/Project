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
  { path: 'list-company', component: ListCompanyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

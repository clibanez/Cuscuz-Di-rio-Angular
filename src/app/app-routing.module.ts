import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { CuscuzListComponent } from './components/cuscuz/cuscuz-list/cuscuz-list.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {
    path: '', component:NavComponent,canActivate: [AuthGuard], children: [
      {path: 'home', component: HomeComponent},
      {path: 'cuscuz', component: CuscuzListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

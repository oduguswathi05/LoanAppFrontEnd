import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { HomeComponent } from './home/home.component';
import { ReviewloanapplicationsComponent } from './reviewloanapplications/reviewloanapplications.component';

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register'
  },
  {
    path: '',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'application',
    component: LoanApplicationComponent,
    title: 'Application'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'reviewloanapplications',
    component: ReviewloanapplicationsComponent,
    title: 'Review LoanApplications'
  }
];

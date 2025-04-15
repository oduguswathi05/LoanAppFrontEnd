import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { HomeComponent } from './home/home.component';
import { ReviewloanapplicationsComponent } from './reviewloanapplications/reviewloanapplications.component';
import { SubmittedApplicationsComponent } from './submitted-applications/submitted-applications.component';
import { DraftApplicationsComponent } from './draft-applications/draft-applications.component';
import { LoanProductsComponent } from './loan-products/loan-products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuggestloanproductsComponent } from './suggestloanproducts/suggestloanproducts.component';

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
    path: 'application/:id',
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
  },
  {
    path: 'drafts',
    component: DraftApplicationsComponent,
    title: 'Your Drafts'
  },
  {
    path: 'submitted',
    component: SubmittedApplicationsComponent,
    title: 'Submitted Applications'
  },
  {
    path: 'loanproducts',
    component: LoanProductsComponent,
    title: 'Loan Products'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'DashBoard'
  },
  {
    path:'suggestedproducts',
    component:SuggestloanproductsComponent,
    title:'Loan Products'
  }


];

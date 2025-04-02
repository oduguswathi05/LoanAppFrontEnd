import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

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
  }
];

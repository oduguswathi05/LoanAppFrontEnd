import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Models/IUser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:44354/api';

  constructor(private http: HttpClient, private router: Router) {}

  loginUser(email: string, passwordHash: string) {
    const body = { email, passwordHash };
    console.log('Sending login request:', body);
    return this.http.post<any>(`${this.apiUrl}/UserAuth/login`, {
      email,
      passwordHash,
    });
  }

  saveToken(token: string,role:string,userId:number) {
    localStorage.setItem('authToken',token);
    localStorage.setItem('userRole', role); 
    localStorage.setItem('userId', userId.toString()); 

  }

  getToken() {
    const token =  localStorage.getItem('authToken');
    return token
  }

  getRole(){
    return localStorage.getItem('userRole');
  }

  isCustomer(): boolean {
    return this.getRole() === 'Customer';
  }

  isLoanOfficer(): boolean {
    return this.getRole() === 'LoanOfficer';
  }

  isLoggedIn(): boolean {
    const token = this.getToken()
    // console.log(token);
    if ( token !== null) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');

    this.router.navigate(['/']);
  }
}

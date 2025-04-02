import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Models/IUser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:44354/api';

  constructor(private http:HttpClient,private router:Router) { }

  loginUser(email:string,passwordHash:string){
    const body = { email, passwordHash};
  console.log("Sending login request:", body); 
      return this.http.post(`${this.apiUrl}/UserAuth/login`,{email,passwordHash});
  }

  saveToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  getToken() {
    return localStorage.getItem('authToken');
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/']);
  }

}

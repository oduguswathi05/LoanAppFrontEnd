import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './Models/IUser';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiUrl = 'https://localhost:44354/api';

  constructor(private http:HttpClient) { }

  postNewUser(newUser:Omit<IUser,'id'>){
    return this.http.post(`${this.apiUrl}/UserAuth/register`,newUser)
  }
}

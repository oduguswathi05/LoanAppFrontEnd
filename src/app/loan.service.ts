import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './Models/IUser';
import { ILoanApplication } from './Models/ILoanApplication';
import { ILoanProduct } from './Models/ILoanProduct';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private apiUrl = 'https://localhost:44354/api';

  constructor(private http: HttpClient) {}

  postNewUser(newUser: IUser) {
    console.log(newUser);
    return this.http.post(`${this.apiUrl}/Users/register/customer`, newUser);
  }

  postDraftApplication(newApplication: ILoanApplication) {
    return this.http.post(
      `${this.apiUrl}/LoanApplications/Draft`,
      newApplication
    );
  }

  getLoanApplicationDetailsByUserId() {
    return this.http.get<ILoanApplication[]>(
      `${this.apiUrl}/LoanApplications/UserId`
    );
  }
  getLoanApplicationDetailsId(id: number) {
    return this.http.get<ILoanApplication>(
      `${this.apiUrl}/LoanApplications/${id}`
    );
  }

  updateDraftApplication(id: number, newApplication: ILoanApplication) {
    return this.http.put(
      `${this.apiUrl}/LoanApplications/Draft/${id}`,
      newApplication
    );
  }

  submitApplication(LoanApplication: ILoanApplication) {
    return this.http.post<{ id: number; loanStatus: string }>(
      `${this.apiUrl}/LoanApplications/Submit`,
      LoanApplication
    );
  }

  getAllLoanApplications() {
    return this.http.get<ILoanApplication[]>(`${this.apiUrl}/LoanApplications`);
  }

  reviewLoanApplication(loanId: number, status: string, comment?: string) {
    return this.http.put(`${this.apiUrl}/LoanApplications/Review/${loanId}`, {
      loanStatus: status,
      reviewComment: comment,
    });
  }

  getUserById(id: number) {
    return this.http.get<IUser>(`${this.apiUrl}/Users/${id}`);
  }

  postLoanProduct(newProduct: ILoanProduct) {
    return this.http.post(`${this.apiUrl}/LoanProducts`, newProduct);
  }

  getAllLoanProducts() {
    return this.http.get<ILoanProduct[]>(`${this.apiUrl}/LoanProducts`);
  }

  updateLoanProduct(id: number, product: ILoanProduct) {
    console.log(id);
    console.log(product);
    return this.http.put(`${this.apiUrl}/LoanProducts/${id}`, product);
  }

  deleteLoanProduct(id: number) {
    return this.http.delete(`${this.apiUrl}/LoanProducts/${id}`);
  }

  suggestLoanProducts() {
    return this.http.get<ILoanProduct[]>(`${this.apiUrl}/LoanProducts/Suggest`);
  }
}

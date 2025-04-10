export interface ILoanApplication {
  id?: number;
  loanAmount?: number;
  annualIncome?: number;
  employmentStatus?: string;
  creditScore?: number;
  residenceType?: string;
  loanTerm?: number;
  loanStatus?: string,
  applicationDate?: string,
  propertyAddress?: string,
  propertyValue?: number,
  userId?: number,
  reviewComment?: string,
  reviewedDate?: string
}

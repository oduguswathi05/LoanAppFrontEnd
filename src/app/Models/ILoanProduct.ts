import { IUser } from "./IUser";

export interface ILoanProduct{
    id: number;
    productName: string;
    interestRate: number;
    minLoanAmount: number;
    maxLoanAmount: number;
    minLoanTerm: number;
    maxLoanTerm: number;
    // isActive: boolean;
    minCreditScore:number;
    minAnnualIncome:number;
}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoanService } from '../loan.service';
import { ILoanApplication } from '../Models/ILoanApplication';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css'
})
export class LoanApplicationComponent {
 
  loanApplication: ILoanApplication={
    loanAmount: undefined,
    annualIncome: undefined,
    employmentStatus: '',
    creditScore: undefined,
    residenceType: '',
    loanTerm: undefined,
    interestRate: undefined,
    propertyAddress: '',
    propertyValue: undefined,
  };

  constructor(private loanService: LoanService) {}

  saveDraft(loanForm: NgForm){
    console.log(loanForm.value);
    if (loanForm.valid) {
      this.loanService.postDraftApplication(this.loanApplication).subscribe({
        next: () => {
          alert('Application Submitted Successfully');
          this.loanApplication = this.initializeLoanApplication(); 
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }

  editDraft(): void {
    this.loanService.getLoanApplicationDetailsByUserId().subscribe({
      next: (existingData) => {
        console.log(existingData)
        this.loanApplication = existingData[0];
      },
      error: (err) => {
        console.error(err);
      }
    });
  }


  updateDraft(){
    if(this.loanApplication.id){
      this.loanService.updateDraftApplication(this.loanApplication.id,this.loanApplication).subscribe(
        {
          next:()=>{
             alert("Draft updated Successfully")
             this.loanApplication = this.initializeLoanApplication(); 
            
          },
          error:(err)=>{
            console.log(err);
          }
        }
       )
    }
     
  }


  private initializeLoanApplication(): ILoanApplication {
    return {
      loanAmount: undefined,
      annualIncome: undefined,
      employmentStatus: '',
      creditScore: undefined,
      residenceType: '',
      loanTerm: undefined,
      interestRate: undefined,
      propertyAddress: '',
      propertyValue: undefined,

      
    };
  }
}

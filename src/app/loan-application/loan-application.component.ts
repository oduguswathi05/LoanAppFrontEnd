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
 
  loanApplication: ILoanApplication=this.initializeLoanApplication();
  showLoanDetails: boolean = false;
  loanStatus:string = 'Draft';
  submittedLoan: ILoanApplication | null  = null;

  constructor(private loanService: LoanService) {}
  saveAsDraft(loanForm: NgForm){
    console.log("save as draft data")
    console.log(loanForm.value);
    if (loanForm.valid) {
      this.loanService.postDraftApplication(this.loanApplication).subscribe({
        next: () => {
          alert('Application Saved as Draft');
          this.submittedLoan = this.loanApplication
          this.loanApplication = this.initializeLoanApplication(); 
          this.loanStatus = 'Pending'
          this.showLoanDetails = true;
        },
        error: (err) => {
          alert(err.error);
        }
      });
    }
  }

  editDraft(): void {
    this.loanService.getLoanApplicationDetailsByUserId().subscribe({
      next: (existingData) => {
        console.log("details by userid for editing")
        console.log(existingData)
        this.loanApplication = existingData[0];
          this.loanStatus = 'Editing'
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
             this.submittedLoan = this.loanApplication
            
          },
          error:(err)=>{
            alert(err.error);
          }
        }
       )
    }
     
  }

  SubmitApplication(){
    this.showLoanDetails = false;
    console.log("submitting details")
    console.log(this.loanApplication)

    this.loanService.submitApplication(this.loanApplication).subscribe(
      {
        next:(data)=>{
          console.log(data);
          alert("Application Submitted Successsfully");
          this.loanApplication = this.initializeLoanApplication(); 
          this.loanStatus = 'Draft';


        },
        error:(err)=>{
          
            alert("Bad Request: " + err.error); 
          
        }
      }
    )

  }


  private initializeLoanApplication(): ILoanApplication {
    return {
      loanAmount: undefined,
      annualIncome: undefined,
      employmentStatus: '',
      creditScore: undefined,
      residenceType: '',
      loanTerm: undefined,
      propertyAddress: '',
      propertyValue: undefined 
    };
  }
}

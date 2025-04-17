import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoanService } from '../loan.service';
import { ILoanApplication } from '../Models/ILoanApplication';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css'
})
export class LoanApplicationComponent {
 
  loanApplication: ILoanApplication=this.initializeLoanApplication();
  loanStatus:string = 'Draft';

  constructor(private loanService: LoanService,private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const draftId = params.get('id');
      if (draftId) {
        this.editDraft(+draftId);
      }
    });
  }
  saveAsDraft(loanForm: NgForm){
    console.log("save as draft data")
    console.log(loanForm.value);
    if (loanForm.valid) {
      this.loanService.postDraftApplication(this.loanApplication).subscribe({
        next: () => {
          alert('Application Saved as Draft');
          this.loanApplication = this.initializeLoanApplication(); 
        },
        error: (err) => {
          alert(err.error);
        }
      });
    }
  }

  editDraft(id:number): void {
    this.loanService.getLoanApplicationDetailsId(id).subscribe({
      next: (existingData) => {
        console.log("details by id for editing")
        console.log(existingData)
        this.loanApplication = existingData;
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
            
          },
          error:(err)=>{
            alert(err.error);
            
          }
        }
       )
    }
     
  }

  SubmitApplication(){
    console.log("submitting details")
    console.log(this.loanApplication)

    this.loanService.submitApplication(this.loanApplication).subscribe(
      {
        next:(response)=>{
          console.log(response);
          if (response.loanStatus === 'Approved') {
            alert("🎉 Your application is automatically approved!");
          } else {
            alert("✅ Application submitted successfully. It's under review.");
          }
          this.loanApplication = this.initializeLoanApplication(); 
          this.loanStatus = 'Draft';
          

        },
        error:(err)=>{
          alert("Bad Request: " + err.error);
          this.loanApplication = this.initializeLoanApplication();  
          this.loanStatus = 'Draft';
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
      propertyValue: undefined ,
      monthlyDebts:undefined
    };
  }
}

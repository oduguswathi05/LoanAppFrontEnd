import { Component } from '@angular/core';
import { ILoanApplication } from '../Models/ILoanApplication';
import { LoanService } from '../loan.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviewloanapplications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviewloanapplications.component.html',
  styleUrl: './reviewloanapplications.component.css'
})
export class ReviewloanapplicationsComponent {
    applications: ILoanApplication[] = [];
    
      constructor(private loanService: LoanService,private router:Router) {}
    
      ngOnInit() {
        this.loanService.getAllLoanApplications().subscribe({
          next: (data) => {
            console.log(data);
            this.applications = data.filter(p=>p.loanStatus === "Pending")    
          },
          error: (err) => alert(err.error)
        });
      }

      Accept(loanId:number,status:string){
        this.loanService.reviewLoanApplication(loanId,status).subscribe(
          {
            next:()=>{
              alert("Application Accepted Successfully")     
            },
            error:(err)=>{
              alert(err.error)
              console.log(err)
            }
          }
        )
      }
}

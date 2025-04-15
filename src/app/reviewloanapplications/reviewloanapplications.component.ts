import { Component, OnInit } from '@angular/core';
import { ILoanApplication } from '../Models/ILoanApplication';
import { LoanService } from '../loan.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IUser } from '../Models/IUser';

@Component({
  selector: 'app-reviewloanapplications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviewloanapplications.component.html',
  styleUrl: './reviewloanapplications.component.css'
})
export class ReviewloanapplicationsComponent implements OnInit {
    applications: ILoanApplication[] = [];

    constructor(private loanService: LoanService,private router:Router) {}
    
      ngOnInit() {
        this.loanService.getAllLoanApplications().subscribe({
          next: (data) => {
            console.log(data);
            this.applications = data.filter(p=>p.loanStatus === "Pending")  
              
            this.applications.forEach(app => {
              if (app.userId) {
                this.loanService.getUserById(app.userId).subscribe({
                  next: (userData) => {
                    app.user = userData;
                    console.log(`User added for app ID ${app.id}:`, app.user); 
                  },
                  error: (err) => {
                    console.error(`Failed to load user ${app.userId}:`, err);
                  }
                });
              }
            }
            
          )
          console.log(this.applications);
          },
          error: (err) => alert(err.error)
        });
      }

      reviewApplication(loanId:number,status:string){
        this.loanService.reviewLoanApplication(loanId,status).subscribe(
          {
            next:()=>{
              alert(`Application ${status} Successfully`)  
             
              this.applications = this.applications.filter(app => app.id !== loanId);              
            },
            error:(err)=>{
              alert(err.error)
              console.log(err)
            }
          }
        )
      }

    
}

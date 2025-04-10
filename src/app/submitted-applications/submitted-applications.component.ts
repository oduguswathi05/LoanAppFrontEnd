import { Component, OnInit } from '@angular/core';
import { ILoanApplication } from '../Models/ILoanApplication';
import { LoanService } from '../loan.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submitted-applications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submitted-applications.component.html',
  styleUrl: './submitted-applications.component.css'
})
export class SubmittedApplicationsComponent implements OnInit{

  submitted: ILoanApplication[] = [];
  
    constructor(private loanService: LoanService) {}
  
    ngOnInit() {
      this.loanService.getLoanApplicationDetailsByUserId().subscribe({
        next: (data) => {
          console.log(data);
          this.submitted = data
        },
        error: (err) => console.error(err),
      });
    }
}

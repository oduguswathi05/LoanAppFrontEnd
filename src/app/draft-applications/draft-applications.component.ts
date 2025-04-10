import { Component, OnInit } from '@angular/core';
import { ILoanApplication } from '../Models/ILoanApplication';
import { LoanService } from '../loan.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-draft-applications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './draft-applications.component.html',
  styleUrl: './draft-applications.component.css'
})
export class DraftApplicationsComponent implements OnInit {
  drafts: ILoanApplication[] = [];

  constructor(private loanService: LoanService,private router:Router) {}

  ngOnInit() {
    this.loanService.getLoanApplicationDetailsByUserId().subscribe({
      next: (data) => {
        console.log(data);
        this.drafts = data.filter(app => app.loanStatus === 'Draft');      },
      error: (err) => console.error(err),
    });
  }

  editDraft(applicationId:number): void {
    
    this.router.navigate(['application',applicationId])
  }
}

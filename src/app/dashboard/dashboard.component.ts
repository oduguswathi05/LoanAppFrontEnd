import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { ILoanApplication } from '../Models/ILoanApplication';
import {NgChartsModule} from 'ng2-charts';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  allApplications:ILoanApplication[]=[]
  pendingCount = 0;
  approvedCount=0;
  rejectedCount = 0;

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      }
    }
  };

  chartLabels: string[] = ['Approved', 'Pending', 'Rejected'];
  chartData: number[] = [0, 0, 0];
  chartType: ChartType = 'pie';

  constructor(private loanService:LoanService){}

  ngOnInit(): void {
    this.loanService.getAllLoanApplications().subscribe({
      next:(data)=>{
         this.allApplications = data
         this.updateCounts();
         this.chartData = [this.approvedCount, this.pendingCount, this.rejectedCount];
      },
      error:(err)=>{
        alert(err.error);
      }
    })
  }

  updateCounts(){
    this.approvedCount = this.allApplications.filter(a => a.loanStatus === 'Approved').length;
    this.pendingCount = this.allApplications.filter(a => a.loanStatus === 'Pending').length;
    this.rejectedCount = this.allApplications.filter(a => a.loanStatus === 'Rejected').length;
   
  }
}

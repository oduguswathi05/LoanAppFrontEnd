import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { ILoanProduct } from '../Models/ILoanProduct';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suggestloanproducts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suggestloanproducts.component.html',
  styleUrl: './suggestloanproducts.component.css'
})
export class SuggestloanproductsComponent implements OnInit {
  suggestedProducts: ILoanProduct[] = [];

  constructor(private loanService:LoanService) {}
  

  ngOnInit(): void {
    this.loanService.suggestLoanProducts().subscribe({
      next:(products)=>{
        this.suggestedProducts = products
      },
      error:(err)=>{
        alert(err.error);
      }
    })
  }

}

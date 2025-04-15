import { Component, OnInit } from '@angular/core';
import { ILoanProduct} from '../Models/ILoanProduct';
import { LoanService } from '../loan.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loan-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './loan-products.component.html',
  styleUrl: './loan-products.component.css',
})
export class LoanProductsComponent implements OnInit {
  products: ILoanProduct[] = [];
  productForm: ILoanProduct = {
    id: 0,
    productName: '',
    interestRate: 0,
    minLoanAmount: 0,
    maxLoanAmount: 0,
    minLoanTerm: 0,
    maxLoanTerm: 0,
    minCreditScore:0,
    minAnnualIncome:0
  };

  constructor(private service: LoanService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.service.getAllLoanProducts().subscribe({
      next:(data)=>{
        this.products = data
      },
      error:(err)=>{
        alert(err.error);
      }
    });
  }

  saveProduct() {
    if (this.productForm.id === 0) {
      this.service.postLoanProduct(this.productForm).subscribe(
        {
          next:()=>{
            alert("Product Added Successfully");
            this.getProducts();
          },
          error:(err)=>{
            alert(err.error);
          }
        }
      );
    } else {
      this.service.updateLoanProduct(this.productForm.id, this.productForm).subscribe({
        next:()=>{
          this.getProducts();
          alert("Product updated successfully");
          
        },
        error:(err)=>{
          console.log(err)
          alert(err.error);
        }
      });
    }
    this.resetForm();
  }

  delete(id: number) {
    this.service.deleteLoanProduct(id).subscribe(
      {
        next:()=>{
          alert("Product deleted successfully");
          this.getProducts();
        },
        error:(err)=>{
          alert(err.error);
        }
      }
    );
  }
  edit(product: ILoanProduct) {
    this.productForm = { ...product };
    console.log(product)
  }


  resetForm() {
    this.productForm = {
      id: 0,
      productName: '',
      interestRate: 0,
      minLoanAmount: 0,
      maxLoanAmount: 0,
      minLoanTerm: 0,
      maxLoanTerm: 0,
      minCreditScore:0,
    minAnnualIncome:0
    };
  }
}

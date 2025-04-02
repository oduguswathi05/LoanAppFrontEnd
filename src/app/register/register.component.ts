import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { LoanService } from '../loan.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private loanService:LoanService,private router:Router){}

  Register(registerDetails:NgForm){
    const newUser = registerDetails.value;
    console.log(newUser)
    if(newUser.password === newUser.cpassword){
       this.loanService.postNewUser(newUser).subscribe(
        {
          next:()=>{
            this.router.navigate(['/'])
          },
          error:(err)=>{
            console.log(err);
          }
        }
       )
    }
  }
}

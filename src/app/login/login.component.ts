import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  constructor(private authService:AuthService,private router:Router) {}

  Login(loginDetails:NgForm){
    const data = loginDetails.value;
    console.log(data);
    this.authService.loginUser(data.email,data.PasswordHash).subscribe(
      {
        next:(response)=>{
          console.log(response)
             this.authService.saveToken(response.token,response.role,response.userId);
            this.router.navigate(["home"]);
        },
        error:(err)=>{
          console.log(err);
        }
      }
    )
  }

}

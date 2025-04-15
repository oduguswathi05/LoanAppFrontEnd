import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,DashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public auth: AuthService) {}

}

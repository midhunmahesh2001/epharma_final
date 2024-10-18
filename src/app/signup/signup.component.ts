import { Component } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Router } from '@angular/router'; // For navigation
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ FormsModule, CommonModule], // Add necessary modules
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const signupData = { name: this.name, email: this.email, password: this.password };

    this.http.post('http://localhost:3000/api/register', signupData).subscribe({
      next: (response: any) => {
        alert('Registration successful!');
        this.router.navigate(['/login']); // Redirect to login page
      },
      error: (error) => {
        console.error('Registration failed:', error);
        alert('Failed to register. Please try again.');
      }
    });
  }
}

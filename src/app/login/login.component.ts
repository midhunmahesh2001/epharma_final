import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router'; // For navigation
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add necessary modules
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const loginData = { email: this.email, password: this.password };

    this.http.post('http://localhost:3000/api/login', loginData).subscribe({
      next: (response: any) => {
        console.log('Login successful:', response);
        alert('Login successful!');
        this.router.navigate(['/profile']); // Navigate to dashboard
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Invalid email or password. Please try again.');
      }
    });
  }
}

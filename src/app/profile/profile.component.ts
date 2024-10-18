import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent implements OnInit {
  userId: string = '12345'; // Replace with actual user ID
  profile: any = {};

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.fetchProfile();
  }

  fetchProfile() {
    this.http.get(`http://localhost:3000/api/profile/${this.userId}`).subscribe({
      next: (data) => this.profile = data,
      error: (err) => console.error('Failed to fetch profile', err)
    });
  }

  updateProfile() {
    console.log('Profile data to update:', this.profile); // Debugging log
    this.http.put(`http://localhost:3000/api/profile/${this.userId}`, this.profile).subscribe({
      next: (data) => {
        alert('Profile updated successfully!');
        this.fetchProfile();
      },
      error: (err) => console.error('Failed to update profile', err)
    });
  }
  
}

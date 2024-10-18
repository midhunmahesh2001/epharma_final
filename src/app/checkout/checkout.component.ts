import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule, RouterModule], // Import necessary modules
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  cardName: string = '';
  cardNumber: string = '';
  expiry: string = '';
  cvv: string = '';
  address: string = '';

  onSubmit(): void {
    if (this.cardName && this.cardNumber && this.expiry && this.cvv && this.address) {
      alert('Payment Successful!');
      this.clearForm();
    } else {
      alert('Please fill out all the fields.');
    }
  }

  clearForm(): void {
    this.cardName = '';
    this.cardNumber = '';
    this.expiry = '';
    this.cvv = '';
    this.address = '';
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.refreshCart();
  }

  refreshCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  updateQuantity(item: any, event: any): void {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity <= 0) {
      this.removeFromCart(item);
    } else {
      item.quantity = newQuantity;
      this.calculateTotal();
    }
  }

  removeFromCart(item: any): void {
    this.cartService.removeFromCart(item);
    this.refreshCart();
  }

  checkout(): void {
    alert('Proceeding to checkout...');
  }
}

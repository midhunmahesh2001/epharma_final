import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  products = [
    { id: 1, name: 'Aspirin', description: 'Aspirin is a pain reliever and anti-inflammatory medication that also helps prevent blood clots.', price: 24, image: 'https://media.istockphoto.com/id/610221624/photo/round-white-pills-and-plastic-pill-bottle.jpg?s=612x612&w=0&k=20&c=RyqGrrsSYA-uLN5Y0Td_h1XIdpHvI7Q3WP18ibXi6tg=' },
    { id: 2, name: 'Paracetamol', description: 'Paracetamol is a common pain reliever and fever reducer used to treat mild to moderate pain.', price: 30, image: 'https://media.istockphoto.com/id/1017920456/photo/pills-on-a-blue-background.jpg?s=612x612&w=0&k=20&c=syEW64RRkBtGyD7R1RXQ18lUoG5QpSkupsCbNL2AgLg=' },
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}

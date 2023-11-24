import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

interface Product {
  name: string;
  price: number;
  image: string;
}

interface CartItem {
  product: Product;
  quantity: number;
  total: number;
}

@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('0', style({ opacity: 0 })),
      state('1', style({ opacity: 1 })),
      transition('0 <=> 1', animate('0.5s ease-in-out'))
    ])
  ]
})
export class GiohangComponent {
  @Input() quantity: number = 1;
  @Input() min: number = 1;
  @Input() max: number = 10;

  decreaseQuantity() {
    if (this.quantity > this.min) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    if (this.quantity < this.max) {
      this.quantity++;
    }
  }
  constructor( private router: Router) {}
  navigateToTrangchu() {
    this.router.navigate(['/trangchu']);}
}

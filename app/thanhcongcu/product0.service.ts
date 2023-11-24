// product.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product0.model';

@Injectable({
  providedIn: 'root',
})
export class Product0Service {
  private products: Product[] = [
    { name: 'Product A', category: 'T-Shirt', size: 'M', color: 'Red', price: 30, imageUrl: 'path/to/image1.jpg' },
    { name: 'Product B', category: 'Jacket', size: 'L', color: 'Blue', price: 50, imageUrl: 'path/to/image2.jpg' },
    // Add more products...
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}

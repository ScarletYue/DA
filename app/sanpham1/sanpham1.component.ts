import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sanpham1',
  templateUrl: './sanpham1.component.html',
  styleUrls: ['./sanpham1.component.css']
})
export class Sanpham1Component {
    @Input() productPrice: number = 50; // Giá gốc của sản phẩm
    @Input() salePrice: number | null = 10; // Số tiền giảm giá
    @Input() hasSale: boolean = false; // Có giảm giá hay không
    @Input() value: number = 0;

    discountedPrice(): number {
      return this.productPrice - (this.salePrice !== null ? this.salePrice : 0);
    }
    increment() {
      this.value++;
    }
  
    decrement() {
      if (this.value > 0) {
        this.value--;
      }
    }
    onInputChange(event: Event) {
      const inputValue = (event.target as HTMLInputElement).value;
      const numericValue = parseInt(inputValue, 10);
  
      if (!isNaN(numericValue)) {
        this.value = numericValue;
      }
    }
    constructor(private router: Router) {}

  navigateToFormLog() {
    this.router.navigate(['/formlog']);
  }
}

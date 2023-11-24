import { Component, OnInit } from '@angular/core';
import { Product } from './product0.model';
import { Product0Service } from './product0.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-thanhcongcu',
  templateUrl: './thanhcongcu.component.html',
  styleUrls: ['./thanhcongcu.component.css']
})
export class ThanhcongcuComponent implements OnInit {
  products: Product[] = [];
  selectedPriceRange: { min: number; max: number } = { min: 0, max: 100 };
  selectedDiscount: boolean = false;

  constructor(private productService: Product0Service, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  filterProducts() {
  }

  navigateToFormLog() {
    this.router.navigate(['/dangnhap']);
    this.router.navigate(['/lienhe']);
    this.router.navigate(['/trangchu']);
    this.router.navigate(['/giohang']);
     this.router.navigate(['/sanpham']);
  }
}

import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanhben',
  templateUrl: './thanhben.component.html',
  styleUrls: ['./thanhben.component.css']
})
export class ThanhbenComponent {
  isFolded:  boolean = false;
  constructor( private renderer: Renderer2, private el: ElementRef, private router: Router) {}

    toggleFold() {
    this.isFolded = !this.isFolded;
    if (this.isFolded) {
      this.renderer.addClass(this.el.nativeElement, 'thanhben--fold');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'thanhben--fold');
    }
  }
  @Output() categorySelected = new EventEmitter<string>();
  selectedCategory: string = 'All';
  categories: string[] = ['All', 'T-Shirt', 'Jacket', 'Hoodie','Shorts','Trousers'];

  selectCategory2(category: string ) {
    this.selectedCategory = category;
    this.categorySelected.emit(category);   
  }
 
}

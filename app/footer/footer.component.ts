import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  footer = [
    {
      diachi: 'Địa chỉ: ',
      email: 'Email:',
      Sdt: 'Số điện thoại: '
    },]
    constructor(private router: Router) {}

  navigateToFormLog() {
    this.router.navigate(['/dangky']);
  }
}

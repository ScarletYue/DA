import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-log',
  templateUrl: './form-log.component.html',
  styleUrls: ['./form-log.component.css']
})
export class FormLogComponent {
  constructor(private router: Router) {}

  navigateToForm() {
    this.router.navigate(['/trangchu']);
    this.router.navigate(['/dangky']);

  }
 
}

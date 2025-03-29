import { Component } from '@angular/core';
import { products } from '../products';
import { CommonModule } from '@angular/common';
// C:/Users/nurma/OneDrive/Рабочий стол/web-dev/lab4-angular-products/src/app/products
@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  products=[...products]

  public share(link: string): void {
    window.location.href = link;
    //  window.open(link, '_blank');
  }
}
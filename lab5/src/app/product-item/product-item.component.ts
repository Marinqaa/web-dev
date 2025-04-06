// product-item.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: any;
  @Output() remove = new EventEmitter<void>();

  likeProduct() {
    if(products.isLiked){
        products.likes += 1;
        products.isLiked = false;
      }
      else{
        product.likes -= 1;
        product.isLiked = true;
      }
  }
}

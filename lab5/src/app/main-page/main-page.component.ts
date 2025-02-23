import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  categories = [
    { name: 'Electronics', path: '/products/electronics' },
    { name: 'Clothing', path: '/products/clothing' },
    { name: 'Home Appliances', path: '/products/home-appliances' },
    { name: 'Books', path: '/products/books' },
  ];
}
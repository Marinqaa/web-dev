import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { categories } from './categories';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-products';
  categories = categories; // Importing the categories
  selectedCategory: any = null;

  selectCategory(category: any) {
    this.selectedCategory = category;
  }
}

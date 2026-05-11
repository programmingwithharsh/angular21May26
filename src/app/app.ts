import { Component, signal } from '@angular/core';
import { ProductList } from './product-list/product-list';
@Component({
  selector: 'app-root',
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 // const x: string = 10;
  protected readonly title = signal('dashboard');
}

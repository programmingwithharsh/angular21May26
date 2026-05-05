import { Component, input } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [],
  templateUrl: './star.html',
  styleUrl: './star.scss',
})
export class Star {
  rating = input<number>(5);
}

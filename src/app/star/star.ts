import { Component, input, OnChanges, output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [],
  templateUrl: './star.html',
  styleUrl: './star.scss',
})
export class Star implements OnChanges {
  rating = input<number>(5);
  ratingClicked = output<string>(); // custom event

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating()} was clicked!`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rating']) {
      const currentValue = changes['rating'].currentValue;
      console.log(`Rating changed to: ${currentValue}`);
    }
  }
}

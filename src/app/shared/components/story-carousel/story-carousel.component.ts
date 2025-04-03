import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { StoryCardComponent } from '../story-card/story-card.component';

export type StoryItem = {
  image: string;
};

@Component({
  selector: 'app-story-carousel',
  imports: [CarouselModule, StoryCardComponent],
  templateUrl: './story-carousel.component.html',
  styleUrl: './story-carousel.component.scss'
})
export class StoryCarouselComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 1,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 3
      },
      350: {
        items: 4
      },
      490: {
        items: 5
      },
      580: {
        items: 6
      },
      710: {
        items: 5
      }
    },
    nav: true
  };

  items: StoryItem[] = [
    {
      image: './assets/example/beads2.jpg'
    },
    {
      image: './assets/example/beads2.jpg'
    },
    {
      image: './assets/example/beads2.jpg'
    },
    {
      image: './assets/example/beads2.jpg'
    },
    {
      image: './assets/example/beads2.jpg'
    },
    {
      image: './assets/example/beads2.jpg'
    },
    {
      image: './assets/example/beads2.jpg'
    },
    {
      image: './assets/example/beads2.jpg'
    }
  ];
}

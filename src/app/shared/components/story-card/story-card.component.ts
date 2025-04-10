import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-story-card',
  imports: [],
  templateUrl: './story-card.component.html',
  styleUrl: './story-card.component.scss'
})
export class StoryCardComponent {
  @Input({
    required: true
  })
  image = '';
}

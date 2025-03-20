import { Component, Input } from '@angular/core';

export type ItemCardModel = { image: string; price: number; name: string };

@Component({
  selector: 'app-item-card',
  imports: [],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  @Input() item: ItemCardModel = {
    image: '',
    price: 0,
    name: ''
  };
}

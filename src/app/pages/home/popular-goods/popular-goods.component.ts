import { Component } from '@angular/core';
import {
  ItemCardModel,
  ItemCardComponent
} from '../../../shared/components/item-card/item-card.component';

@Component({
  selector: 'app-popular-goods',
  imports: [ItemCardComponent],
  templateUrl: './popular-goods.component.html',
  styleUrl: './popular-goods.component.scss'
})
export class PopularGoodsComponent {
  goods: ItemCardModel[] = [
    {
      image: './assets/example/beads.png',
      price: 120,
      name: 'Бисер японский'
    },
    {
      image: './assets/example/beads.png',
      price: 120,
      name: 'Бисер японский'
    },
    {
      image: './assets/example/beads.png',
      price: 120,
      name: 'Бисер японский'
    },
    {
      image: './assets/example/beads.png',
      price: 120,
      name: 'Бисер японский'
    }
  ];
}

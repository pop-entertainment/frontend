import { Component, OnInit } from '@angular/core';
import {
  ItemCardModel,
  ItemCardComponent
} from '../../../shared/components/item-card/item-card.component';

@Component({
  selector: 'app-goods-catalog',
  imports: [ItemCardComponent],
  templateUrl: './goods-catalog.component.html',
  styleUrl: './goods-catalog.component.scss'
})
export class GoodsCatalogComponent implements OnInit {
  goods: ItemCardModel[] = [];

  ngOnInit(): void {
    for (let index = 0; index < 23; index++) {
      this.goods.push({
        image: './assets/example/beads.png',
        price: 120,
        name: 'Бисер японский'
      });
    }
  }
}

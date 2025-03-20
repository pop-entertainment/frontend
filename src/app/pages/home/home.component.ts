import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  ItemCardComponent,
  ItemCardModel
} from '../../shared/components/item-card/item-card.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatButtonModule, ItemCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  item: ItemCardModel = {
    image: './assets/example/beads.png',
    price: 120,
    name: 'Бисер японский'
  };
}

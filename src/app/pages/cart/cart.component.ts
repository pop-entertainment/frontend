import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ItemCardModel } from '../../shared/components/item-card/item-card.component';
import { BackButtonComponent } from '../../shared/components/back-button/back-button.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, BackButtonComponent, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  products: ItemCardModel[] = [
    {
      image: './assets/example/beads.png',
      name: 'Бисер японский',
      price: 150
    },
    {
      image: './assets/example/beads.png',
      name: 'Бисер японский',
      price: 150
    }
  ];
}

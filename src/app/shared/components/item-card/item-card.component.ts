import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

export type ItemCardModel = { image: string; price: number; name: string };

@Component({
  selector: 'app-item-card',
  imports: [CommonModule, RouterModule],
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

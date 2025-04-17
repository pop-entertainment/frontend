import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BackButtonComponent } from '../../shared/components/back-button/back-button.component';
import { MatButtonModule } from '@angular/material/button';
import { CartStore } from '../../stores';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, BackButtonComponent, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartStore = inject(CartStore);
}

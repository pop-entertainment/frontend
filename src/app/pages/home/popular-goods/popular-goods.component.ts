import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { StoreService } from '../../../services';

@Component({
  selector: 'app-popular-goods',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './popular-goods.component.html',
  styleUrl: './popular-goods.component.scss'
})
export class PopularGoodsComponent {
  private storeService = inject(StoreService);

  products$ = this.storeService.getProducts();
}

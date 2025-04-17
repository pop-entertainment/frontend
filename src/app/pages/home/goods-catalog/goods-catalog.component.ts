import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { StoreService } from '../../../services';

@Component({
  selector: 'app-goods-catalog',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './goods-catalog.component.html',
  styleUrl: './goods-catalog.component.scss'
})
export class GoodsCatalogComponent {
  private storeService = inject(StoreService);

  products$ = this.storeService.getProducts();
}

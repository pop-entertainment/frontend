import { Component, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { ProductInfoModel } from '../../../shared/models';
import { StoreService } from '../../../services';

@Component({
  selector: 'app-goods-catalog',
  imports: [ProductCardComponent],
  templateUrl: './goods-catalog.component.html',
  styleUrl: './goods-catalog.component.scss'
})
export class GoodsCatalogComponent implements OnInit {
  private storeService = inject(StoreService);

  products: ProductInfoModel[] = [];

  ngOnInit(): void {
    this.storeService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}

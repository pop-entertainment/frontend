import { Component, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { ProductInfoModel } from '../../../shared/models';
import { StoreService } from '../../../services';

@Component({
  selector: 'app-popular-goods',
  imports: [ProductCardComponent],
  templateUrl: './popular-goods.component.html',
  styleUrl: './popular-goods.component.scss'
})
export class PopularGoodsComponent implements OnInit {
  private storeService = inject(StoreService);

  products: ProductInfoModel[] = [];

  ngOnInit(): void {
    this.storeService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
